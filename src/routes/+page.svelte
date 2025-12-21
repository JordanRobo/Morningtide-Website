<script lang="ts">
	import type { Post } from "$lib/data/types";
	import { goto } from "$app/navigation";
	import type { PageProps } from "./$types";
	import { slide } from "svelte/transition";
	import { getContext } from "svelte";

	let { data }: PageProps = $props();

	const services: string[] = ["Strategy Planning", "Competitor Analysis", "Financial Forecasting", "Customer Auditing"];
	let index: number = $state(0);
	const width: Function = getContext("width");
	const isLargeScreen: boolean = $derived(width() >= 1024);

	$effect(() => {
		const roller = setInterval(() => {
			index = (index + 1) % services.length;
		}, 5000);

		return () => {
			clearInterval(roller);
		};
	});
</script>

<svelte:head>
	<title>Morningtide Consulting</title>
	<meta name="description" content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy." />
</svelte:head>

<!--Hero Section -->
<div class="hero h-180 relative">
	<picture class="absolute inset-0 w-full h-full">
		<img src="/images/uploads/business-team-collaborating_tiny-1200w.webp" alt="Team collaborating" class="w-full h-full object-cover" loading="eager" decoding="async" />
	</picture>
	<div class="hero-overlay bg-opacity-70 absolute inset-0 z-10"></div>
	<div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end relative z-20">
		<div class="text-center lg:text-start">
			<h1 class="text-4xl font-bold uppercase md:text-6xl text-accent">
				Morningtide<br />Consulting
				<span class="text-white/80">for</span>
			</h1>
			{#key index}
				<h2 class="text-4xl font-bold uppercase md:text-6xl text-white/80" transition:slide>{services[index]}</h2>
			{/key}
			<p class="py-2 text-lg font-medium lg:max-w-lg text-white">Wondering How You Could Create A Compelling School Strategy?</p>
			<div class="flex gap-2 max-lg:justify-center py-2">
				<a href="/services" class="btn btn-primary md:btn-lg rounded-full shadow-md">Learn here</a>
				<a href="/insights" class="btn btn-ghost md:btn-lg rounded-full font-light text-white hover:text-primary">Read our insights</a>
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

<!-- Introduction Text -->
<div class="bg-white">
	<div class="max-w-5xl mx-auto p-4">
		<div class="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-8 md:py-8 text-center lg:text-left">
			{#if isLargeScreen}
				<div>
					<picture>
						<img src="/images/uploads/about-1200w.webp" alt="Morningtide Consulting Team" class="h-full object-cover rounded-tr-[120px]" loading="lazy" width="300" height="300" />
					</picture>
				</div>
				<div class="col-start-1 row-start-2">
					<picture>
						<img src="/images/uploads/insights-1200w.webp" alt="Insights Feature" class="h-full object-cover rounded-bl-[120px]" loading="lazy" width="300" height="300" />
					</picture>
				</div>
				<div class="col-start-2 row-start-2">
					<picture>
						<img src="/images/uploads/services-1200w.webp" alt="Services Feature" class="h-full object-cover rounded-tr-[120px]" loading="lazy" width="300" height="300" />
					</picture>
				</div>
			{/if}
			<div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:ml-8">
				<h2 class="text-accent text-4xl font-bold mb-4">Ready to Craft Your School Strategy?</h2>
				<p class="mb-2">
					Many independent school leaders view school strategy in one of two ways. Either they are keen to get started but not sure how, or past experiences have numbed the desire, and the pressure to deliver the school's
					strategic plan now evokes anxiety and stress. <span class="font-bold">You are not alone.</span>
				</p>
			</div>
			<div class="lg:col-span-2 lg:row-start-2 lg:self-end lg:ml-6">
				<h3 class="text-accent text-3xl font-bold mb-2">How We Can Help</h3>
				<p class="mb-2">
					Morningtide Consulting can help you craft a compelling school strategy. We then provide you an unconventional framework to successfully implement it - while keeping your stakeholders engaged and committed.
				</p>
				<p class="mb-2">Take a look around our site and read some of our articles, service offerings, and recommendations.</p>
				<p>When you are ready, book an <a href="/services" class="link link-accent">obligation-free consultation.</a></p>
			</div>
		</div>
	</div>
</div>

{#if data?.highlight_posts}
	{@render latestPost(data.highlight_posts)}
{/if}

{#snippet latestPost(posts: Post[])}
	<div class="container mx-auto">
		<div class="p-6 w-full sm:w-150] md:w-180 lg:w-240 mx-auto space-y-8 my-8">
			{#each posts as post}
				<div class="card lg:card-side bg-white shadow-xl">
					<figure class="lg:w-1/2 max-h-55 lg:max-h-75">
						<img class="object-cover h-full" src={post.feature_image} alt={post.title} width="100%" height="100%" />
					</figure>
					<div class="card-body lg:w-1/2">
						<h2 class="card-title">{post.title}</h2>
						<p class="line-clamp-5">{post.custom_excerpt}</p>
						<div class="card-actions justify-end">
							<button onclick={() => goto(`/insights/${post.slug}`)} class="btn btn-primary">Read more</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/snippet}
