<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	import { TeamImg } from '$lib/images/uploads';

	let services: any[] = ["Strategy Planning", "Competitor Analysis", "Financial Forecasting", "Customer Auditing"];
	let index: number = 0;
	let roller: any;

	onMount(() => {
		roller = setInterval(() => {
			index = index === services.length - 1 ? 0 : index + 1;
		}, 3000);
	});

	onDestroy(() => {
		clearInterval(roller);
	});

</script>

<div class="hero h-[720px]" style="background-image: url({TeamImg});">
	<div class="hero-overlay bg-opacity-70"></div>
	<div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end">
		<div class="text-center lg:text-start">
			<h1 class="text-5xl font-bold uppercase md:text-7xl text-accent">Morningtide<br>Consulting
				<span class="text-white/80">for</span>
			</h1>
			{#key index}
				<h1 class="text-5xl font-bold uppercase md:text-7xl text-white/80" transition:slide>{services[index]}</h1>
			{/key}
			<p class="py-2 text-xl font-medium lg:max-w-lg text-white">Wondering How You Could Create A Compelling School Strategy?</p>
			<div class="flex gap-2 max-lg:justify-center py-2">
				<a href="/services" class="btn btn-primary md:btn-lg rounded-full shadow-md">Get Started</a>
				<a href="/" class="btn btn-ghost md:btn-lg rounded-full font-light text-white">Read success stories</a>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col text-center lg:flex-row lg:justify-around bg-primary p-4">
	<div>
		<span class="text-white opacity-60">Mon-Fri 8:00 - 18:00 (AEDT)</span>
	</div>
	<div>
		<span class="text-white opacity-60">Melbourne | Sydney | Brisbane | Adelaide | Perth</span>
	</div>
	<div>
		<span class="text-white opacity-60">info@morningtide.com.au</span>
	</div>
</div>