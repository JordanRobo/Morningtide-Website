<script>
	import '../app.css';
	import { Navbar, Footer } from '$lib';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	// FIXME: Adjust layout for Mobiles 
	// TODO: Add Mobile Navigation

</script>

<div class="bg-stone-50">
	<div class="min-h-dvh">
		<Navbar />
		{#key data.pathname}
			<div in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</div>
		{/key}
	</div>
	<Footer />
</div>
