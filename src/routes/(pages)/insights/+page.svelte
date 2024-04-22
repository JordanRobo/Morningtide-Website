<script lang="ts">
	import type { PageData } from './$types';
	import { newPost } from '$lib/util';
	import PostCard from '$lib/components/PostCard.svelte';
	export let data: PageData;

	const tagFilters = [
		{ id: 1, name: 'Change Management' },
		{ id: 2, name: 'Innovation' },
		{ id: 3, name: 'Leadership Development' },
		{ id: 4, name: 'Learning' },
		{ id: 5, name: 'Organisational Culture' },
		{ id: 6, name: 'People' },
		{ id: 7, name: 'Recruitment' },
		{ id: 8, name: 'Strategy' }
	];

</script>

<div class="flex flex-wrap justify-center gap-2 my-4">
{#each tagFilters as tag (tag.id)}
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

<div class="flex flex-wrap justify-center gap-8 my-8">
{#each data.posts as post}
	<div class="indicator">
		{#if newPost(post.published_at)}
			<span class="indicator-item badge badge-accent badge-lg"
				>New</span
			>
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