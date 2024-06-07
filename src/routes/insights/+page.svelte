<script lang="ts">
	import type { PageData } from './$types';
	import { Individual, Skeleton } from '$lib/components/ui/posts/cards';
	import { Header } from '$lib/components/ui/shared';
	import { insights } from '$lib/data';
	import { newPost } from '$lib/utils';
	import { tagFilter } from '$lib/stores';

	export let data: PageData;

	$: filteredPosts = data.posts.filter((post: { tags: any[]; }) => 
		!$tagFilter || post.tags.some(tag => tag.slug === $tagFilter)
	);

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

{#await data.posts}
	<div class="container mx-auto flex flex-wrap justify-center gap-8 my-8">
		<Skeleton />
	</div>
{:then}
	{#if filteredPosts.length === 0}
		<p>No posts found</p>
	{:else}
		<div class="container mx-auto flex flex-wrap justify-center gap-8 my-8">
			{#each filteredPosts as post (post.id)}
					<Individual checkNew={newPost(post.published_at)} {post} />
			{/each}
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
