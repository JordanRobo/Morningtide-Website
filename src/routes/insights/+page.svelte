<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { PostCard } from '$lib';
	import { newPost } from '$lib/utils';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { SectionHero } from '$lib';

	export let data: PageData;

	let next = false;
	let previous = false;
	
	const selectedTag = writable<string | null>('');

	$: $selectedTag = $page.url.searchParams.get('tag') || '';

	function nextPage() {
		const page: any = $page.url.searchParams.get('page') || 1;
		if (data.meta.pagination.page < data.meta.pagination.pages) {
			goto(`/insights?page=${parseInt(page) + 1}&tag=${$selectedTag}`);
		} else {
			
		}
	};

	function prevPage() {
		const page: any = $page.url.searchParams.get('page') || 1;
		if (data.meta.pagination.page > 1) {
			goto(`/insights?page=${parseInt(page) - 1}&tag=${$selectedTag}`);
		} else {
			
		}

	};

	let insights ={
		"image": "https://source.unsplash.com/1600x900/?about",
		"badge":"How we think",
		"heading":"Insights",
		"subheading":"We regularly produce articles that we hope will inform, inspire, and provide insights into school strategy and leadership."
	};

</script>

<svelte:head>
	<title>Insights | Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<SectionHero image={insights.image} badge={insights.badge} heading={insights.heading} subheading={insights.subheading} />

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
			<div class="join">
				<select class="select select-bordered join-item" bind:value={$selectedTag}>
					<option selected value="">All Posts</option>
					{#each data.tags as tag (tag.id)}
						<option value={tag.slug}>{tag.name}</option>
					{/each}
					</select>
				<button on:click={() => {goto("/insights?page=1&tag=" + $selectedTag)}} class="btn join-item">Filter</button>
			</div>
	</div>
</div>

<div class="container mx-auto flex flex-wrap justify-center gap-8 my-8">
    {#each data.posts as post (post.id)}
            <PostCard
                checkNew={newPost(post.published_at)}
                title={post.title}
                tags={post.tags}
                custom_excerpt={post.custom_excerpt}
                feature_image={post.feature_image}
                slug={post.slug}
            />
    {/each}
</div>

<div class="flex flex-wrap justify-center py-8">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
		<div class="join grid grid-cols-2">
			<button disabled={previous} class="join-item btn btn-outline" on:click={prevPage}>Previous page</button>
			<button disabled={next} class="join-item btn btn-outline" on:click={nextPage}>Next</button>
		</div>
	</div>
</div>