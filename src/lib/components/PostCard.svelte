<script lang="ts">
	import { goto } from '$app/navigation';

	export let title: string;
	export let custom_excerpt: string;
	export let feature_image: string;
	export let slug: string;
</script>

<div class="card w-5/6 sm:w-2/3 md:w-96 bg-base-100 shadow-xl">
	<figure><img class="object-cover w-full h-48" src={feature_image} alt={title} /></figure>
	<div class="card-body space-y-2">
		<h2 class="card-title h2 text-2xl">
			{title}
		</h2>
		<p>{custom_excerpt}</p>
		<div class="card-actions justify-between">
			<div class="self-end"></div>
			<div>
				<button on:click={() => goto('insights/' + slug)} class="btn btn-primary"
					>Read More...</button
				>
			</div>
		</div>
	</div>
</div>
