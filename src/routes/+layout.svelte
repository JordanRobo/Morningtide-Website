<script lang="ts">
	import '../app.css';
	import { Navbar, Footer, Drawernav } from '$lib';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import { drawer } from '$lib/stores';
	
	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			drawer.close();
			event.preventDefault();
		}
	};

	$: { if (data && data.pathname) { drawer.close(); }};

</script>

<div class="bg-stone-50">
	<div class="min-h-dvh">
		<Navbar insights={data.tags}/>
		<div class="drawer drawer-end">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={$drawer}/>
			<div class="drawer-content">
		</div> 
		<div class="drawer-side z-50">
			<div class="drawer-overlay" role="button" tabindex="0" on:click={drawer.close} on:keydown={handleKeydown}></div>
				<ul class="menu p-4 w-80 min-h-full bg-white">
					<Drawernav insights={data.tags}/>
				</ul>
			</div>
		</div>
		{#key data.pathname}
			<div in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</div>
		{/key}
	</div>
</div>
<Footer />
