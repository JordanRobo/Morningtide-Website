<script lang="ts">
	import * as services from "$lib/data/services.json";
	import type { Service } from "$lib/data/types";
	import { ChevronRight } from "svelte-radix";
	import { superForm } from "sveltekit-superforms";
	import { Control, Field, Label, Description, Fieldset } from "formsnap";
	import { valibotClient } from "sveltekit-superforms/adapters";
	import { enquirySchema } from "$lib/schema.js";
	import { onMount, getContext } from "svelte";
	import { toast } from "svelte-sonner";
	import { page } from "$app/state";
	import * as Swetrix from "swetrix";

	let prop = $props();
	const serviceId = $derived(page.url.searchParams.get("service"));
	const referrerId = $derived(page.url.searchParams.get("ref"));
	const width: Function = getContext("width");
	const isMobile = $derived(width() <= 425);

	$effect(() => {
		if (serviceId && !isMobile) {
			setTimeout(() => {
				const element = document.getElementById(serviceId);
				element?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			}, 500);
		} else if (serviceId && isMobile) {
			setTimeout(() => {
				const element = document.getElementById(serviceId);
				element?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 500);
		}

		if (referrerId) {
			$formData.enquiry_referrer = referrerId;
		}
	});

	const form = superForm(prop.data.enquiryForm, {
		customValidity: true,
		validators: valibotClient(enquirySchema),
		onUpdated({ form }) {
			if (form.valid) {
				toast.success("Thank you for your enquiry! We will be in touch shortly.");
			} else {
				toast.error("There was an error processing your request.");
			}
		},
	});

	const { form: formData, enhance } = form;

	const referrers = ["Google", "Facebook", "Instagram", "Twitter", "LinkedIn", "Email", "Other"];

	const startedButton = (service: string) => {
		const enquiry_form = document.getElementById("enquiry-form");

		$formData.enquiry_service = service;
		enquiry_form?.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	};

	const handleSubmit = (service_type: string, refferer: string) => {
		Swetrix.track({
			ev: "enquiry_form_submitted",
			meta: {
				service_type,
				refferer,
			},
		});
	};

	onMount(() => {
		$formData.form_id = "services enquiry";
	});
</script>

<div class="max-w-5xl mx-auto p-4 gap-4 my-16 space-y-12">
	<div class="flex flex-col items-center text-center space-y-1">
		<h1 class="text-3xl font-bold md:text-4xl">How We Work With Schools</h1>
		<span class="divider divider-accent w-48 mx-auto"></span>
		<p>At Morningtide, we partner with independent and Catholic schools to build strategy that works.</p>
		<p>Whether you're ready for a whole-school transformation or just need sharper alignment in one area, we offer flexible entry points that meet your leadership team where they are.</p>
		<p>Every service is designed to equip you with clarity, momentum, and tools you can actually use.</p>
	</div>
	{#each services.services as service}
		{@render serviceCard(service)}
	{/each}
</div>

<div id="enquiry-form" class="bg-white -mb-8">
	<div class="container max-w-5xl flex flex-col mx-auto mt-8 py-12 space-y-12">
		<div class="flex flex-row w-full">
			<div class="flex flex-col items-center text-center space-y-1">
				<h1 class="text-3xl font-bold md:text-4xl">Let's Talk About What Matters Most</h1>
				<span class="divider divider-accent w-48 mx-auto"></span>
				<p>From strategy clarity to culture shifts, we’re here to help you think it through. Use the options below - or book a free discovery call with Stuart to chat about where your school is heading.</p>
			</div>
		</div>
		<div class="flex flex-row w-full gap-8">
			<div class="hidden w-2/3 md:flex md:flex-col">
				<img loading="lazy" src="/images/uploads/service_form.webp" alt="Form" class="aspect-video object-cover" />
			</div>
			<div class="flex flex-col w-full md:w-1/3 gap-8">
				<form class="space-y-4 mx-auto md:mx-0" method="POST" action="/?/enquire" use:enhance>
					<input type="text" name="form_id" class="hidden" bind:value={$formData.form_id} />
					<Field {form} name="name">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Name</span>
									<input class="input md:input-sm validator" {...props} type="text" placeholder="John Doe" required bind:value={$formData.name} />
								</Label>
							{/snippet}
						</Control>
					</Field>
					<Field {form} name="email">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Email</span>
									<input class="input md:input-sm validator" {...props} type="email" placeholder="john.doe@example.com" required bind:value={$formData.email} />
								</Label>
							{/snippet}
						</Control>
					</Field>
					<Field {form} name="mobile">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Phone</span>
									<input class="input md:input-sm validator" {...props} type="tel" placeholder="0412 345 678" required bind:value={$formData.mobile} />
								</Label>
							{/snippet}
						</Control>
					</Field>
					<Field {form} name="enquiry_service">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Service</span>
									<select class="select md:select-sm text-xs! validator" {...props} bind:value={$formData.enquiry_service}>
										<option disabled selected value="">Which service would you like to discuss?</option>
										{#each services.services as service}
											<option value={service.title}>{service.title}</option>
										{/each}
									</select>
								</Label>
							{/snippet}
						</Control>
					</Field>
					<Field {form} name="enquiry_referrer">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Referrer</span>
									<select class="select md:select-sm text-xs!" {...props} bind:value={$formData.enquiry_referrer}>
										<option disabled selected value="">How did you hear about us?</option>
										{#each referrers as referrer}
											<option value={referrer}>{referrer}</option>
										{/each}
									</select>
								</Label>
							{/snippet}
						</Control>
					</Field>
					<Fieldset class="fieldset" {form} name="enquiry_message">
						<Control>
							{#snippet children({ props })}
								<Label class="floating-label">
									<span>Message</span>
									<textarea class="textarea md:textarea-sm validator" placeholder="Is there anything else you'd like to know?" {...props} bind:value={$formData.enquiry_message}></textarea>
								</Label>
							{/snippet}
						</Control>
						<Description class="max-w-80"
							>By clicking the “Submit” button, you are agreeing to our
							<button onclick={(event) => (event.preventDefault(), privacy_policy.showModal())} class="link link-accent">Privacy Policy.</button>
						</Description>
					</Fieldset>
					<div class="flex justify-end -mt-2 md:-mt-4">
						<button class="btn btn-primary w-full md:w-32" onclick={() => handleSubmit($formData.enquiry_service, $formData.enquiry_referrer)} type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

{#snippet serviceCard(input: Service)}
	<div id={input.id} class="last:bg-primary! last:text-white odd:bg-accent/10 rounded-lg overflow-hidden odd:shadow-lg p-4 group">
		<div class="flex flex-col lg:flex-row">
			<div class="grid content-between h-96 lg:w-1/3 my-4">
				<div class="relative h-80">
					<div class="absolute z-10 top-4 md:top-1 md:left-0 group-even:bg-primary group-odd:bg-accent text-white px-6 py-2 font-semibold text-lg uppercase tracking-wide">
						{input.badge}
					</div>
					<div class="absolute md:bottom-0 md:right-0">
						<img loading="lazy" src={input.image} alt={input.title} class="md:h-72 object-cover aspect-square rounded-br-[120px]" />
					</div>
				</div>

				<div class="flex mt-12 justify-center md:justify-end">
					<button onclick={() => startedButton(input.title)} class="btn group-even:btn-primary group-odd:btn-accent text-white px-6 py-3 font-semibold tracking-wide flex items-center gap-2">
						LET'S GET STARTED
						<ChevronRight />
					</button>
				</div>
			</div>

			<!-- Right Section with Content -->
			<div class="lg:w-2/3 p-8">
				<!-- Title -->
				<h2 class="text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
					{input.title}
				</h2>

				<!-- Description -->
				<p class="text-gray-600 group-last:text-white/80 leading-relaxed mb-8">
					{@html input.description}
				</p>

				{#each input.accordion as item, index}
					<div class="collapse collapse-arrow border-b border-gray-300 group-last:border-white/30">
						<input type="checkbox" name="accordion-{index}" />
						<div class="collapse-title font-semibold flex items-center gap-2">
							{item.title}
						</div>
						<div class="collapse-content prose prose-sm prose-ul:mb-4 group-last:text-white/90 group-last:prose-li:marker:text-white">
							{@html item.content}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/snippet}
