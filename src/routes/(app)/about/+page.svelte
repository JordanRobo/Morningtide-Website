<script lang="ts">
	import { Header } from '$lib/components/ui/shared';
	import { about } from '$lib/data';
	import type { ActionData } from './$types';
	import { Values, Subscribe, Clients, Details } from '$lib/components/ui/about';
	import { CheckCircled, ExclamationTriangle } from 'svelte-radix';
	import { fade } from 'svelte/transition';

	export let form: ActionData;

	let showMessage = false;
	let messageTimeout: NodeJS.Timeout;

	$: {
		if (form?.success !== undefined) {
			showMessage = true;
			clearTimeout(messageTimeout);
			messageTimeout = setTimeout(() => {
				showMessage = false;
			}, 5000);
		}
	}

	const getMessage = (success: boolean) => ({
		icon: success ? CheckCircled : ExclamationTriangle,
		title: success ? 'Success' : 'Error',
		message: success ? 'You have successfully subscribed!' : 'Sorry, we encountered an error.'
	});
</script>

<svelte:head>
	<title>About | Morningtide Consulting</title>
	<meta name="description" content={about.subheading} />
</svelte:head>

<Header header={about} />
<Clients />
<Values />
<Details />
<Subscribe />

{#if showMessage}
	<div class="toast toast-center z-50" transition:fade={{ duration: 300 }}>
		<div class="alert {form?.success ? 'alert-success' : 'alert-error'} shadow-lg">
			<div>
				<svelte:component this={getMessage(form?.success).icon} class="w-6 h-6" />
				<div>
					<h3 class="font-bold">{getMessage(form?.success).title}</h3>
					<div class="text-xs">{getMessage(form?.success).message}</div>
				</div>
			</div>
		</div>
	</div>
{/if}