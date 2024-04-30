<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { PostCard } from '$lib';
	import { newPost } from '$lib/utils';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const selectedTag = writable<string | null>('');

	$: $selectedTag = $page.url.searchParams.get('tag') || '';

	// TODO: Add in pagination of blog posts

</script>

<svelte:head>
	<title>Insights | Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
			<div class="join">
				<select class="select select-bordered join-item" bind:value={$selectedTag}>
					<option selected value="">All Posts</option>
					{#each data.tags as tag (tag.id)}
						<option value={tag.slug}>{tag.name}</option>
					{/each}
					</select>
				<button on:click={() => {goto("/insights?tag="+ $selectedTag)}} class="btn join-item">Filter</button>
			</div>
	</div>
</div>

<div class="flex flex-wrap justify-center gap-8 my-8" >
	{#each data.posts as post}
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