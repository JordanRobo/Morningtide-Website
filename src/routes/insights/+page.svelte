<script lang="ts">
	import type { PageData } from './$types';
	import { Individual, Skeleton } from '$lib/components/ui/posts/cards';
	import { Header } from '$lib/components/ui/shared';
	import { insights } from '$lib/data';
	import { newPost } from '$lib/utils';
	import { tagFilter, postsPage } from '$lib/stores';

	export let data: PageData;

	const pageSize = 9;

	$: filteredPosts = data.posts.filter((post: { tags: any[]; }) => 
		!$tagFilter || post.tags.some(tag => tag.slug === $tagFilter)
	);

	$: totalPosts = filteredPosts.length;
	$: totalPages = Math.ceil(totalPosts / pageSize);

	$: paginatedPosts = filteredPosts.slice(($postsPage - 1) * pageSize, $postsPage * pageSize);

	$: low = ($postsPage - 1) * pageSize + 1;
  	$: high = Math.min($postsPage * pageSize, totalPosts);

	function nextPage() {
		if ($postsPage < totalPages) {
			$postsPage += 1;
		}
	}
  
	function previousPage() {
		if ($postsPage > 1) {
			$postsPage -= 1;
		}
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
					<option selected value="">All Posts</option>
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

<div class="flex flex-row">
	<div class="flex flex-col mx-auto text-center gap-2">
		<div class="join join-horizontal">
			<button class="btn join-item w-24" on:click={previousPage} disabled={$postsPage === 1}>Previous</button>
			<button class="btn join-item w-24" on:click={nextPage} disabled={$postsPage === totalPages}>Next</button>
		</div>
		{#if low == high}
			<p>{high} of {totalPosts} Posts</p>
		{:else}
			<p>{low}-{high} of {totalPosts} Posts</p>
		{/if}
	</div>
</div>