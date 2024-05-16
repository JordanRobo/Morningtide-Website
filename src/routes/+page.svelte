<script lang="ts">
	import type { PageData } from './$types';
	import { Hero, HomeContent, LatestPost } from '$lib';

	export let data: PageData;
</script>

<svelte:head>
	<title>Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<Hero />

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

<HomeContent />

<div class="container mx-auto">
	<div class="bg-stone-50">
		<div class="p-6 w-full sm:w-[600px] md:w-[720px] lg:w-[960px] mx-auto space-y-8 my-8">
			{#each data.posts as post}
				<LatestPost
					title={post.title}
					image={post.feature_image}
					custom_excerpt={post.custom_excerpt}
					slug={post.slug}
				/>
			{/each}
		</div>
	</div>
</div>
