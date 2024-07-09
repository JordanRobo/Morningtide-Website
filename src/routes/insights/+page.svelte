<script lang="ts">
	import type { PageData } from './$types';
	import { Individual } from '$lib/components/ui/posts/cards';
	import { Header } from '$lib/components/ui/shared';
	import { insights } from '$lib/data';
	import { newPost } from '$lib/utils';
	import { tagFilter, postsPage } from '$lib/stores';

	export let data: PageData;

	const PAGE_SIZE = 9;

	$: filteredPosts = data.posts.filter((post) => 
		!$tagFilter || post.tags.some(tag => tag.slug === $tagFilter)
	);

	$: totalPosts = filteredPosts.length;
	$: totalPages = Math.ceil(totalPosts / PAGE_SIZE);
	$: paginatedPosts = filteredPosts.slice(($postsPage - 1) * PAGE_SIZE, $postsPage * PAGE_SIZE);
	$: ({ low, high } = getPaginationRange($postsPage, PAGE_SIZE, totalPosts));

	function getPaginationRange(currentPage: number, pageSize: number, total: number) {
		const low = (currentPage - 1) * pageSize + 1;
		const high = Math.min(currentPage * pageSize, total);
		return { low, high };
	}

	function changePage(delta: number) {
		$postsPage = Math.max(1, Math.min($postsPage + delta, totalPages));
	}
</script>

<svelte:head>
	<title>Insights | Morningtide Consulting</title>
	<meta name="description" content={insights.subheading}/>
</svelte:head>

<Header header={insights} />

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
		<div class="join">
			<select class="select select-bordered join-item" bind:value={$tagFilter}>
				<option value="">All Posts</option>
				{#each data.tags as tag (tag.id)}
					<option value={tag.slug}>{tag.name}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<div class="container mx-auto flex flex-wrap justify-center gap-8 my-8">
	{#each paginatedPosts as post (post.id)}
		<Individual checkNew={newPost(post.published_at)} {post} />
	{/each}
</div>

<div class="flex flex-col items-center gap-2 mt-8">
	<div class="join">
		<button class="btn join-item w-24" on:click={() => changePage(-1)} disabled={$postsPage === 1}>
			Previous
		</button>
		<button class="btn join-item w-24" on:click={() => changePage(1)} disabled={$postsPage === totalPages}>
			Next
		</button>
	</div>
	<p>
		{#if low === high}
			{high}
		{:else}
			{low}-{high}
		{/if}
		of {totalPosts} Posts
	</p>
</div>