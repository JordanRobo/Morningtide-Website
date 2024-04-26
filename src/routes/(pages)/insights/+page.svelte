<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { newPost } from '$lib/util';
	import PostCard from '$lib/components/PostCard.svelte';
	export let data: PageData;
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const selectedTag = writable<string | null>('');

	$: $selectedTag = $page.url.searchParams.get('tag') || '';

	console.log(data);

	// TODO: Add in pagination of blog posts
</script>

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

<div class="flex flex-wrap justify-center gap-8 my-8">
    {#each data.posts as post}
	<div class="indicator">
		{#if newPost(post.published_at)}
			<span class="indicator-item badge badge-accent badge-lg">New</span>
		{/if}
		<PostCard
			title={post.title}
			tags={post.tags}
			custom_excerpt={post.custom_excerpt}
			feature_image={post.feature_image}
			slug={post.slug}
		/>
	</div>
    {/each}
</div>