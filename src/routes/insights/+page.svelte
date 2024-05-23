<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Individual } from '$lib/components/ui/posts/cards';
	import { Header } from '$lib/components/ui/shared';
	import { insights } from '$lib/data';
	import { newPost } from '$lib/utils';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let data: PageData;
	
	const selectedTag = writable<string | null>('');
	const pageNumber = writable<number | null>(1);
	const lastPage = writable<boolean>(false);
	const firstPage = writable<boolean>(true);
	const upperBound = writable<number>(0);
	const lowerBound = writable<number>(0);

	$: {
		$selectedTag = $page.url.searchParams.get('tag') || '';
		$pageNumber = parseInt($page.url.searchParams.get('page') || '1');
		$lastPage = data.meta.pagination.page === data.meta.pagination.pages;
		$firstPage = data.meta.pagination.page === 1;
		$lowerBound = data.meta.pagination.page === 1 ? 1 : (data.meta.pagination.page - 1) * data.meta.pagination.limit + 1;
		$upperBound = data.meta.pagination.page === data.meta.pagination.pages ? data.meta.pagination.total : data.meta.pagination.page * data.meta.pagination.limit;
	};

	function nextPage() {
		if (!$lastPage && $pageNumber !== null) {
			goto(`/insights?page=${$pageNumber + 1}&tag=${$selectedTag}`);
		}
	};

	function prevPage() {
		if (!$firstPage && $pageNumber !== null) {
			goto(`/insights?page=${$pageNumber - 1}&tag=${$selectedTag}`);
		}
	};
</script>

<svelte:head>
	<title>Insights | Morningtide Consulting</title>
	<meta name="description" content={insights.subheading}/>
</svelte:head>

<Header header={insights} />

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
			<div class="join">
				<input type="text" class="input join-item input-bordered" placeholder="Search" />
				<select class="select select-bordered join-item" bind:value={$selectedTag}>
					<option selected value="">All Posts</option>
					{#each data.tags as tag (tag.id)}
						<option value={tag.slug}>{tag.name}</option>
					{/each}
					</select>
				<button on:click={() => {goto("/insights?page=1&tag=" + $selectedTag)}} class="btn join-item">Filter</button>
			</div>
	</div>
</div>

<div class="container mx-auto flex flex-wrap justify-center gap-8 my-8">
    {#each data.posts as post (post.id)}
            <Individual checkNew={newPost(post.published_at)} {post} />
    {/each}
</div>

<div class="flex flex-wrap justify-center py-8">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
		<p>{$lowerBound} - {$upperBound} of {data.meta.pagination.total}</p>
		<div class="join grid grid-cols-2">
			<button class="join-item btn btn-outline" class:btn-disabled={$firstPage} on:click={prevPage}>Previous</button>
			<button class="join-item btn btn-outline" class:btn-disabled={$lastPage} on:click={nextPage}>Next</button>
		</div>
	</div>
</div>