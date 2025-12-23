<script lang="ts">
	import { Cross1 } from "svelte-radix";
	import { onMount } from "svelte";
	import { superForm } from "sveltekit-superforms";
	import type { Infer, SuperValidated } from "sveltekit-superforms";
	import { subscribeSchema, type SubscribeSchema } from "$lib/schema";
	import { toast } from "svelte-sonner";
	import { Control, Field, Label } from "formsnap";
	import { valibotClient } from "sveltekit-superforms/adapters";
	import * as Swetrix from "swetrix";

	let { data }: { data: SuperValidated<Infer<SubscribeSchema>> } = $props();

	// svelte-ignore state_referenced_locally
	const form = superForm(data, {
		id: "subscribe-popup",
		customValidity: true,
		validators: valibotClient(subscribeSchema),
		onUpdated({ form }) {
			if (form.valid) {
				subscribe_form.close();
				toast.success("Thank you for subscribing!");
			} else {
				toast.error("There was an error processing your request.");
			}
		},
	});

	const { form: formData, enhance } = form;

	const handleSubmit = () => {
		Swetrix.track({
			ev: "email_popup_subscribed",
			meta: {
				form_location: "popup",
			},
		});
	};

	const handleExit = () => {
		Swetrix.track({
			ev: "email_popup_dismissed",
			meta: {
				form_location: "popup",
			},
		});
	};

	onMount(() => {
		$formData.form_id = "subscribe popup";
	});
</script>

<dialog id="subscribe_form" class="modal">
	<div class="modal-box bg-primary text-white w-11/12 max-w-2xl p-8">
		<form method="dialog">
			<button onclick={() => handleExit()} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Cross1 class="h-4 w-4" /></button>
		</form>
		<div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-4">
			<div class="pl-4">
				<h1 class="font-bold">Stay ahead of the game!</h1>
				<p class="py-4">Subscribe to our newsletter for exclusive updates and insights.</p>
			</div>
			<form class="flex items-center" method="POST" action="/?/subscribe" use:enhance>
				<div class="space-y-4 w-full text-base-content">
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
					<div class="flex justify-end pt-3">
						<button onclick={() => handleSubmit()} class="btn btn-accent text-white" type="submit">Subscribe</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</dialog>
