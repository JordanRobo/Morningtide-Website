<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import { RelatedCard } from '$lib';
	export let data: PageData;

	let post = data.post;

</script>
<svelte:head>
	<title>Morningtide Consulting | {post.meta_title}</title>
	<meta name="description" content={post.meta_description} />
</svelte:head>

<div class="flex flex-col max-w-[640px] mx-auto bg-white mb-4 p-4 -m-32 space-y-8">
	<div class="space-y-6">
		<h1 class="h1 text-4xl font-bold text-center">{post.title}</h1>
		<div class="border border-accent"></div>
		<div class="flex justify-around">
			<p>{post.reading_time} min read</p>
			<p>By {post.authors[0].name}</p>
			<p>{formatDate(post.published_at)}</p>
		</div>
		<div class="border border-accent"></div>
		<div class="prose pl-4">
			{@html post.html}
		</div>
	</div>
	<div class="divider"></div> 
	<div class="grid grid-cols-3">
		<div class="avatar justify-self-center">
			<div class="w-32 rounded-full">
				<img src={post.primary_author.profile_image} alt={post.primary_author.name} />
			</div>
		</div>
		<div class="col-span-2">
			<h5>{post.primary_author.name}</h5>
			<p>{post.primary_author.bio}</p>
		</div>
	</div>
	<div class="divider"></div> 
	<h3 class="text-center">Related Posts</h3>
	<div class="carousel rounded-box gap-2">
		{#each data.related as related}
			<div class="carousel-item w-full sm:w-1/2">
				<RelatedCard
					title={related.title}
					tags={related.tags}
					feature_image={related.feature_image}
					slug={related.slug}
				/>
			</div>
		{/each}
	</div> 
</div>
