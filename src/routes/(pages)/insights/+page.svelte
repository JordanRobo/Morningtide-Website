<script lang="ts">
	import type { PageData } from './$types';
	import { newPost } from '$lib/util';
	import PostCard from '$lib/components/PostCard.svelte';
	export let data: PageData;

	console.log(data);

	// TODO: Add in post filter function
	// Create buttons for each tag, and when a button is pressed, it should update a writable store with the selected tag.
	// The purpose of using a writable store is to allow for future navigation functionality where you can direct to a page with a filter already applied.
	// On the server-side, you have an API endpoint that accepts a tagFilter parameter. When a tag is selected, you want to load posts containing that specific tag using the code const filter = await api.posts.browse({filter: 'tag:' + tagFilter});.
	// The tag buttons should behave like radio buttons, meaning only one tag can be selected at a time. If the same tag button is clicked again, it should reset the filter to an empty string, effectively removing the filter.

</script>

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
		<h4 class="text-primary">Filter Posts</h4>
		{#each data.tags as tag (tag.id)}
			<button>		
				<div class="badge badge-outline badge-primary gap-2 badge-md">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
					{tag.name}
				</div>
			</button>
		{/each}
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