<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/util';
	export let data: PageData;

	let post = data.post;

	console.log(data)

	// TODO: Add feature image with parrallax effect
	// Add Author Info
	// Add Commenting for post (Either Post as guest of login, figure out how to prevent bots)
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/insights">Insights</a></li>
		<li>{post.title}</li>
	</ul>
</div>
<div class="flex flex-col max-w-[640px] mx-auto bg-white mb-4 p-4">
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
</div>
