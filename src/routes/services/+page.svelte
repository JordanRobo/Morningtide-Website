<script lang="ts">
	import { Services } from '$lib/components/ui/services';	
	import { services } from '$lib/data';
	import type { ActionData } from './$types';

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
	<title>Services | Morningtide Consulting</title>
	<meta name="description" content={services.subheading} />
</svelte:head>

<Services />

{#if showMessage && form?.success === true}
	<div class="toast toast-center z-50">
		<div class="alert alert-success">
			<span>Thanks for your submission, we look forward to speaking soon!</span>
		</div>
	</div>
{:else if showMessage && form?.success === false}
	<div class="toast toast-center z-50">
		<div class="alert alert-error text-center">
			<span>Oh No, there was a problem, please try again.</span>
		</div>
	</div>
{/if}