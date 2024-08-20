<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { Footer, Main, Scroll2Top, Mobile } from '$lib/components/ui/navigation';
	import { SubscribeForm, PrivacyPolicy } from '$lib/components/ui/modal';
	import { drawer } from '$lib/stores';
	import { showModal } from '$lib/utils';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const TRANSITION_DURATION = 300;
	const TRANSITION_DELAY = TRANSITION_DURATION + 100;
	const TRANSITION_Y = 10;
	const POPUP_DELAY = 3000;
	const POPUP_INTERVAL = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds

	const transitionIn = { easing: cubicOut, y: TRANSITION_Y, duration: TRANSITION_DURATION, delay: TRANSITION_DELAY };
	const transitionOut = { easing: cubicIn, y: -TRANSITION_Y, duration: TRANSITION_DURATION };

	let hasMouseCursor = true;

	function showPopUpOnce() {
		const popUpShownDate = localStorage.getItem('popUpShownDate');
		const currentDate = new Date().getTime();
		if (!popUpShownDate || (currentDate - new Date(popUpShownDate).getTime()) > POPUP_INTERVAL) {
			showModal('subscribe_form');
			localStorage.setItem('popUpShownDate', currentDate.toString());
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			drawer.close();
			event.preventDefault();
		}
	}

	onMount(() => {
		if (browser) {
			hasMouseCursor = !('ontouchstart' in window);
			setTimeout(() => {
				if (hasMouseCursor) {
					window.addEventListener('beforeunload', showPopUpOnce);
				} else {
					showPopUpOnce();
				}
			}, hasMouseCursor ? 0 : POPUP_DELAY);
		}
	});

	onDestroy(() => {
		if (browser && hasMouseCursor) {
			window.removeEventListener('beforeunload', showPopUpOnce);
		}
	});

	$: if (data && data.pathname) {
		drawer.close();
	}
</script>


<PrivacyPolicy data={data.privacyPolicy} />
<SubscribeForm />

<div class="bg-stone-50 pb-8">
	<Main insights={data.tags} />
	<div class="drawer drawer-end">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={$drawer} />
		<div class="drawer-content" />
		<div class="drawer-side z-50">
			<div class="drawer-overlay" role="button" tabindex="0" on:click={drawer.close} on:keydown={handleKeydown} />
			<Mobile insights={data.tags}/>
		</div>
	</div>
	{#key data.pathname}
		<div in:fly={transitionIn} out:fly={transitionOut}>
			<slot />
		</div>
	{/key}
</div>

<Footer />
<Scroll2Top />