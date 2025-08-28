<script lang="ts">
	import '../app.css';
	import { fly, fade } from "svelte/transition";
	import { onMount, setContext } from 'svelte';
	import { cubicIn, cubicOut } from "svelte/easing";
	import { page } from '$app/state';
	import { Navbar, Footer, PrivacyPolicy, SubscribeForm } from "$lib/components";
	import { showPopup } from '$lib/utils';
	import type { LayoutProps } from './$types';
    import { afterNavigate, goto } from '$app/navigation';
    import { Toaster } from 'svelte-sonner';
    import { ChevronUp, Home } from 'svelte-radix';
    import Dock from '$lib/components/Dock.svelte';

	let { data, children }: LayoutProps = $props();

	const transitionIn = { easing: cubicOut, y: 10, duration: 300, delay: 400 };
	const transitionOut = { easing: cubicIn, y: -10, duration: 300 };
	let showButton = $state(false);
	let y: number = $state(0);
	let width: number = $state(0);
	const scrollThreshold = 200;

	setContext('width', () => width);
	setContext('y', () => y);

	$effect(() => {
		if (y > scrollThreshold) {
			showButton = true;
		} else {
			showButton = false;
		}
	});

	onMount(() => {
		setTimeout(() => {
			showPopup();
		}, 15000)
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />
<svelte:body onmouseleave={showPopup} />

<Toaster richColors position="bottom-center" />
<PrivacyPolicy data={data.privacyPolicy} />
<SubscribeForm data={data.subscribeForm} />

<div class="bg-stone-50 pb-8">
	<Navbar {data} />
	{#key data.pathname}
		<div in:fly={transitionIn} out:fly={transitionOut}>
			{@render children()}
		</div>
	{/key}
</div>

<Footer data={data.subscribeForm} />
<Dock />

<div>
	{#if showButton && width > 425}
		<button aria-label="scroll to top" class="btn btn-circle btn-accent fixed bottom-2 right-2 z-50" transition:fade={{ duration: 300 }} onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
			<ChevronUp class="text-white w-6 h-6" />
		</button>
	{:else if showButton && width <= 425}
		<button aria-label="scroll to top" class="btn btn-circle btn-accent fixed bottom-30 right-2 z-50" transition:fade={{ duration: 300 }} onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
			<ChevronUp class="text-white w-6 h-6" />
		</button>
		<button class="btn btn-circle btn-accent fixed bottom-18 right-2 z-50" transition:fade={{ duration: 300 }} onclick={() => goto('/')}>
			<Home class="text-white w-6 h-6" />
		</button>
	{/if}
</div>
