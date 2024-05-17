<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import { Related } from '$lib/components/ui/posts/cards';
	import ShareButtons from '$lib/components/ui/posts/ShareButtons.svelte';

	export let data: PageData;

	let post = data.post;

	const url = "https://jordanrobo.xyz/insights/" + post.slug;
	const title = post.title;
</script>
<svelte:head>
	<title>Morningtide Consulting | {post.title}</title>
	<meta name="description" content={post.meta_description} />
</svelte:head>

<div class="hidden md:block text-sm breadcrumbs px-4">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/insights">Insights</a></li>
		<li>{data.post.title}</li>
	</ul>
</div>
<div class="hidden lg:block mx-auto w-11/12">
	<div class="h-[500px] bg-fixed bg-no-repeat bg-top" style="background-image: url({post.feature_image})"></div>
</div>
<img src={post.feature_image} alt={post.title} class="w-full max-h-96 object-cover block lg:hidden" />
<div class="flex flex-col max-w-[720px] mx-auto bg-white mb-4 p-8 lg:-mt-32 space-y-8">
	<div class="space-y-6">
		<h1 class="h1 text-4xl font-bold text-center px-4">{post.title}</h1>
		<div class="border border-accent"></div>
		<div class="flex flex-col text-center md:flex-row md:justify-around">
			<p>{post.reading_time} min read</p>
			<p class="font-bold">By {post.authors[0].name}</p>
			<p>{formatDate(post.published_at)}</p>
		</div>
		<div class="border border-accent"></div>
		<div class="prose mx-auto">
			{@html post.html}
		</div>
	</div>
	<ShareButtons {url} {title} />
	<div class="divider"></div> 
	<div class="grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-4">
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
				<Related {related} />
			</div>
		{/each}
	</div> 
</div>
