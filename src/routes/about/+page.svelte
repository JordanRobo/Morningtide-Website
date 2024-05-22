<script lang="ts">
	import { Header } from '$lib/components/ui/shared';
	import { about } from '$lib/data';
	import type { ActionData } from './$types';
	import { Values, Subscribe } from '$lib/components/ui/about';
	import { CheckCircled, ExclamationTriangle } from 'svelte-radix';

	export let form: ActionData;

	let showMessage = false;

	$: if (form?.success !== undefined) {
		showMessage = true;
		setTimeout(() => {
			showMessage = false;
		}, 5000); 
	};
</script>

<svelte:head>
	<title>About | Morningtide Consulting</title>
	<meta name="description" content={about.subheading} />
</svelte:head>

<Header header={about} />
<Values />
<Subscribe />

{#if showMessage && form?.success === true}
	<div class="toast toast-center z-50">
		<div class="join rounded-box">
			<div class="join-item p-4 bg-success text-success-content text-xl">
				<CheckCircled class="w-14 h-14 text-white" />
			</div>
			<div class="join-item flex flex-col py-2 px-4 bg-base-200">
				<h3 class="text-success font-bold">Success</h3>
				<span class="text-sm">You have successfully subscribed!</span>
			</div>
		</div>
	</div>
{:else if showMessage && form?.success === false}
	<div class="toast toast-center z-50">
		<div class="join rounded-box">
			<div class="join-item p-4 bg-error text-error-content text-xl">
				<ExclamationTriangle class="w-14 h-14 text-white" />
			</div>
	
			<div class="join-item flex flex-col py-2 px-4 bg-base-200">
				<h3 class="text-error font-bold">Error</h3>
				<span class="text-sm">Sorry but we encountered an error.</span>
			</div>
		</div>
	</div>
{/if}
