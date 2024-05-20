<script lang="ts">
	import '../app.css';
	import { Footer, Main, Scroll2Top, Mobile } from '$lib/components/ui/navigation';
	import { SubscribeForm, PrivacyPolicy } from '$lib/components/ui/modal';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import { drawer } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { showModal } from '$lib/utils';
	import { browser } from '$app/environment';

	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;
	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	let hasMouseCursor = true;

	const showPopUpOnce = () => {
		const popUpShown = localStorage.getItem('popUpShown');
		if (!popUpShown) {
			showModal('subscribe_form');
			localStorage.setItem('popUpShown', 'true');
		}
	};

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			drawer.close();
			event.preventDefault();
		}
	};

	$: {
		if (data && data.pathname) {
			drawer.close();
		}
	};

	onMount(() => {
		if (browser){
			hasMouseCursor = 'ontouchstart' in window;

			if (hasMouseCursor) {
				window.addEventListener('beforeunload', showPopUpOnce);
			} else {
				showPopUpOnce();
			}
		}
	});

	onDestroy(() => {
		if (browser && hasMouseCursor) {
			window.removeEventListener('beforeunload', showPopUpOnce);
		}
	});
</script>

<PrivacyPolicy data={data.privacyPolicy} />
<SubscribeForm />
<div class="bg-stone-50 pb-8">
	<Main insights={data.tags} />
	<div class="drawer drawer-end">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={$drawer} />
		<div class="drawer-content"></div>
		<div class="drawer-side z-50">
			<div class="drawer-overlay" role="button" tabindex="0" on:click={drawer.close} on:keydown={handleKeydown}></div>
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