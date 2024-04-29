<script lang="ts">
	import { goto } from '$app/navigation';

	export let title: string;
	export let custom_excerpt: string;
	export let feature_image: string;
	export let slug: string;
	export let tags: { id: number, name: string }[];
	export let checkNew: boolean;

</script>

		
<div class="card w-5/6 sm:w-2/3 md:w-96 bg-base-100 shadow-xl">
	<figure><img class="object-cover w-full h-48" src={feature_image} alt={title} /></figure>
	<div class="card-body space-y-2">
		<h2 class="card-title h2 text-2xl">
			{title}
			{#if checkNew }
				<div class="badge badge-accent badge-lg">New</div>
			{/if}
		</h2>
		<div class="w-full flex flex-wrap gap-2">
			{#each tags as tag (tag.id)}
				<div class="badge badge-accent badge-outline">{tag.name}</div>
			{/each}
		</div>
		<p>{custom_excerpt}</p>
		<div class="card-actions justify-between">
			<div class="self-end"></div>
			<div>
				<button on:click={() => goto('insights/' + slug)} class="btn btn-primary">Read More...</button>
			</div>
		</div>
	</div>
</div>