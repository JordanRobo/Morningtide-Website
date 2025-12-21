<script lang="ts">
	import { EnvelopeClosed, InstagramLogo, LinkedinLogo, TwitterLogo } from "svelte-radix";
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { superForm } from "sveltekit-superforms";
	import type { Infer, SuperValidated } from "sveltekit-superforms";
	import { subscribeSchema, type SubscribeSchema } from "$lib/schema";
	import { toast } from "svelte-sonner";
	import { Control, Description, Fieldset, Label } from "formsnap";
	import { valibotClient } from "sveltekit-superforms/adapters";

	let { data }: { data: SuperValidated<Infer<SubscribeSchema>> } = $props();

	// svelte-ignore state_referenced_locally
	const form = superForm(data, {
		id: "subscribe-footer",
		customValidity: true,
		validators: valibotClient(subscribeSchema),
		onUpdated({ form }) {
			if (form.valid) {
				toast.success("Thank you for subscribing!");
			} else {
				toast.error("There was an error processing your request.");
			}
		},
	});

	const { form: formData, enhance } = form;

	let isCampaign = $derived(page.url.toString().includes("campaign"));
	let currentYear = $state(0);

	onMount(() => {
		currentYear = new Date().getFullYear();
		$formData.form_id = "footer subscribe";
	});
</script>

{#if !isCampaign}
	<footer class="footer p-10 bg-primary text-white md:grid-cols-6 md:space-x-4">
		<nav class="md:col-start-2 md:col-span-2">
			<h6 class="footer-title font-heading">Want to stay up to date?</h6>
			<p class="text-sm max-w-80">Enter your email to join our mailing list and be the first to receive our exclusive insights.</p>
			<form method="POST" action="/?/subscribe" use:enhance>
				<input type="text" name="form_id" class="hidden" bind:value={$formData.form_id} />
				<Fieldset class="fieldset mt-2" {form} name="email">
					<Control>
						{#snippet children({ props })}
							<div class="join">
								<div>
									<Label class="input input-sm join-item">
										<EnvelopeClosed class="text-primary h-4" />
										<input class="input input-sm text-base-content" {...props} type="email" bind:value={$formData.email} />
									</Label>
								</div>
								<button class="btn btn-sm btn-accent text-white join-item">Subscribe</button>
							</div>
						{/snippet}
					</Control>
					<Description class="max-w-80"
						>By clicking the “Subscribe” button, you are agreeing to our
						<button onclick={(event) => (event.preventDefault(), privacy_policy.showModal())} class="link link-accent">Privacy Policy.</button>
					</Description>
				</Fieldset>
			</form>
		</nav>
		<div class="flex flex-row gap-12 md:gap-8 md:contents justify-between">
			<nav class="flex flex-col md:flex-none md:col-start-4 md:justify-self-end">
				<h6 class="footer-title font-heading">Site Links</h6>
				<a href="/privacy-policy" class="link link-hover">Privacy Policy</a>
				<a href="/about" class="link link-hover font-body">About</a>
				<a href="/insights" class="link link-hover font-body">Insights</a>
				<a href="/services" class="link link-hover font-body">Services</a>
			</nav>
			<nav class="flex flex-col md:flex-none md:col-start-5 md:justify-self-end">
				<h6 class="footer-title font-heading">Quick Links</h6>
				<a href="/services?service=full-ridge-strategic-process" class="link link-hover font-body">R.I.D.G.E Strategy</a>
				<a href="/about#contact" class="link link-hover font-body">Contact Us</a>
				<a href="/services?service=enquiry-form" class="link link-hover font-body">Enquiry Form</a>
				<a href="/rss" class="link link-hover font-body">RSS Feed</a>
			</nav>
		</div>
	</footer>
{/if}
<footer class="mb-16 md:mb-0 footer px-4 md:px-10 py-4 border-t bg-primary text-white border-accent md:grid-cols-6">
	<aside class="grid mx-auto md:mx-0 items-center grid-flow-col md:col-start-2 md:col-span-2">
		<img src="/images/logo/white.png" width="100" height="100" alt="Morningtide Logo" class="max-h-16 w-full pr-4" />
		<p class="font-body text-sm">Morningtide Consulting<br />© {currentYear} Morningtide Consulting</p>
	</aside>
	<nav class="place-self-center md:justify-self-end md:col-start-5">
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="View Stuart Robinson's LinkedIn Profile">
				<LinkedinLogo class="text-white h-6 w-6" />
			</a>
			<a href="https://twitter.com/Morningtide_Go" aria-label="View Morningtide Consulting's Twitter Account">
				<TwitterLogo class="text-white h-6 w-6" />
			</a>
			<a href="https://www.instagram.com/morningtide.consulting/" aria-label="View Morningtide Consulting's Instagram Feed">
				<InstagramLogo class="text-white h-6 w-6" />
			</a>
		</div>
	</nav>
</footer>
