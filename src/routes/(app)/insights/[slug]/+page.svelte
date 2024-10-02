<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import { Related } from '$lib/components/ui/posts/cards';
	import ShareButtons from '$lib/components/ui/posts/ShareButtons.svelte';
	import { fade } from 'svelte/transition';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	export let data: PageData;

	let options = { loop: true };
	let plugins = [Autoplay({ delay: 4000 })];

	$: ({ post, related } = data);
	$: url = `https://morningtide.com.au/insights/${post.slug}`;
	$: title = post.title;
</script>

<svelte:head>
	<title>Morningtide Consulting | {post.title}</title>
	<meta name="description" content={post.meta_description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.meta_description} />
	<meta property="og:image" content={post.feature_image} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="max-w-3xl mx-auto bg-white mb-4 p-8 space-y-8" transition:fade>
	<header>
		<div class="hidden lg:block mx-auto">
			<div
				class="h-96 bg-no-repeat bg-top bg-cover"
				style="background-image: url({post.feature_image})"
			></div>
		</div>
		<img
			src={post.feature_image}
			alt={post.title}
			class="w-full max-h-96 object-cover block lg:hidden"
		/>

		<h1 class="text-4xl font-bold text-center px-4 mt-8">{post.title}</h1>

		<div class="flex flex-col text-center md:flex-row md:justify-around my-4">
			<p>{post.reading_time} min read</p>
			<p class="font-bold">By {post.authors[0].name}</p>
			<time datetime={post.published_at}>{formatDate(post.published_at)}</time>
		</div>
	</header>

	<hr class="border-accent" />

	<div class="prose mx-auto">
		{@html post.html}
	</div>

	<ShareButtons {url} {title} />

	<hr class="border-accent" />

	<section class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
		<img
			src={post.primary_author.profile_image}
			alt={post.primary_author.name}
			class="w-32 h-32 rounded-full mx-auto md:mx-0 justify-self-center"
		/>
		<div class="col-span-2 text-center md:text-left">
			<h2 class="text-xl font-semibold">{post.primary_author.name}</h2>
			<p>{post.primary_author.bio}</p>
		</div>
	</section>

	<hr class="border-accent" />

	<section>
		<h2 class="text-2xl font-bold text-center mb-4">Related Posts</h2>
		<div class="overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }}>
			<div class="flex">
				{#each related as relatedPost (relatedPost.id)}
					<div class="basis-full md:basis-1/2 px-2">
						<Related related={relatedPost} />
					</div>
				{/each}
			</div>
		</div>
	</section>
</article>
