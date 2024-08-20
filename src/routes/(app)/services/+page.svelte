<script lang="ts">
	import { Strategy, Competitor, Customer, Financial, Services } from '$lib/components/ui/services';
	import type { ActionData } from './$types';
	import { CheckCircled, ExclamationTriangle } from 'svelte-radix';
	import { activeService } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let form: ActionData;

	$: showMessage = form?.success !== undefined;

	$: if (showMessage) {
		setTimeout(() => {
			showMessage = false;
		}, 5000);
	}

	const transitionProps = {
		duration: 300,
		easing: quintOut,
		x: 100
	};

	const serviceComponents = {
		'strategy-planning': Strategy,
		'competitor-analysis': Competitor,
		'financial-forecast-review': Financial,
		'customer-experience-audit': Customer,
		default: Services
	};
</script>

{#key $activeService}
	<div
		out:fly={{ ...transitionProps }}
		in:fly={{ ...transitionProps, delay: 350, x: -100 }}
	>
		<svelte:component this={serviceComponents[$activeService] || serviceComponents.default} />
	</div>
{/key}

{#if showMessage}
	<div class="toast toast-center z-50">
		<div class="join rounded-box">
			<div class="join-item p-4 {form?.success ? 'bg-success' : 'bg-error'} text-xl">
				<svelte:component
					this={form?.success ? CheckCircled : ExclamationTriangle}
					class="w-14 h-14 text-white"
				/>
			</div>
			<div class="join-item flex flex-col py-2 px-4 bg-base-200">
				<h3 class="font-bold {form?.success ? 'text-success' : 'text-error'}">
					{form?.success ? 'Success' : 'Error'}
				</h3>
				<span class="text-sm">
					{form?.success ? 'Your message was successfully sent!' : 'Sorry, we encountered an error.'}
				</span>
			</div>
		</div>
	</div>
{/if}