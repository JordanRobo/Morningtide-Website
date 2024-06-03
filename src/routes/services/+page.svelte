<script lang="ts">
	import { Services, Strategy, Competitor, Customer, Financial } from '$lib/components/ui/services';	
	import type { ActionData } from './$types';
	import { CheckCircled, ExclamationTriangle } from 'svelte-radix';
	import { activeService } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    export let form: ActionData;

    let showMessage = false;

    $: if (form?.success !== undefined) {
        showMessage = true;
        setTimeout(() => {
            showMessage = false;
        }, 5000); 
    };

</script>

{#if $activeService === 'strategy-planning' }
<div out:fly={{ duration: 300, easing: quintOut, x:100 }} in:fly={{ delay: 350, duration: 300, easing: quintOut, x:-100 }}>
	<Strategy />
</div>
{:else if $activeService === 'competitor-analysis'}
<div out:fly={{ duration: 300, easing: quintOut, x:100 }} in:fly={{ delay: 350, duration: 300, easing: quintOut, x:-100 }}>
	<Competitor />
</div>
{:else if $activeService === 'financial-forecast-review'}
<div out:fly={{ duration: 300, easing: quintOut, x:100 }} in:fly={{ delay: 350, duration: 300, easing: quintOut, x:-100 }}>
	<Financial />
</div>
{:else if $activeService === 'customer-experience-audit'}
<div out:fly={{ duration: 300, easing: quintOut, x:100 }} in:fly={{ delay: 350, duration: 300, easing: quintOut, x:-100 }}>
	<Customer />
</div>
{:else}
<div out:fly={{ duration: 300, easing: quintOut, x:100 }} in:fly={{ delay: 350, duration: 300, easing: quintOut, x:-100 }}>
	<Services />
</div>
{/if}


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
