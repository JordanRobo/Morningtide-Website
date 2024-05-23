<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Post } from '$lib/data/types';

	export let post: Post;
	
	export let checkNew: boolean;
</script>

		
<div class="card w-5/6 sm:w-2/3 md:w-96 bg-base-100 shadow-xl">
	<figure><img class="object-cover w-full h-48" src={post.feature_image} alt={post.title} width="100%" height="100%" /></figure>
	<div class="card-body space-y-2">
		<h2 class="card-title h2 text-2xl">
			{post.title}
			{#if checkNew }
				<div class="badge badge-accent badge-lg">New</div>
			{/if}
		</h2>
		<div class="w-full flex flex-wrap gap-2">
			{#each post.tags as tag (tag.id)}
				<div class="badge badge-accent badge-outline">{tag.name}</div>
			{/each}
		</div>
		<p>{post.custom_excerpt}</p>
		<div class="card-actions justify-between">
			<div class="self-end"></div>
			<div>
				<button on:click={() => goto('insights/' + post.slug)} class="btn btn-primary">Read More...</button>
			</div>
		</div>
	</div>
</div>