<script lang="ts">
	import { newPost } from "$lib/utils";
	import { goto } from "$app/navigation";
	import { page, navigating } from "$app/state";
	import type { PageProps } from "./$types";
	import { postCard } from './post-card.svelte';
    import { getContext } from "svelte";

	let { data }: PageProps = $props();

	const meta = $derived(data.meta?.pagination || {});
	const totalItems = $derived(meta.total);
	const high = $derived(meta.page * meta.limit);
	const tags = $derived(page.data.tags);

	const loading = $derived(navigating.complete);
	let isLoading = $state(false);
	let loadingTimeout: ReturnType<typeof setTimeout> | null = null;

	const getScrollY = getContext('y') as () => number;

	const waitForScrollToTop = () => {
			return new Promise<void>((resolve) => {
				const checkScroll = () => {
					if (getScrollY() <= 10) { // Allow for small margin
						resolve();
					} else {
						requestAnimationFrame(checkScroll);
					}
				};
				checkScroll();
			});
		};

	$effect(() => {
		const isNavigating = loading !== null;

		if (isNavigating && !isLoading) {
            isLoading = true;
        } else if (!isNavigating && isLoading) {
            if (loadingTimeout) {
                clearTimeout(loadingTimeout);
            }

            loadingTimeout = setTimeout(() => {
                isLoading = false;
                loadingTimeout = null;
            }, 500);
        }

        return () => {
            if (loadingTimeout) {
                clearTimeout(loadingTimeout);
                loadingTimeout = null;
            }
        };
	});

	let filter = $derived(page.url.searchParams.get('filter')?.replace('tag:', '') || '');

	$effect(() => {
		if(filter) {
			goto(`/insights?filter=tag:${filter}`)
		} else {
			goto(`/insights`)
		}
	});

	const next = async () => {
		isLoading = true;
		window.scrollTo({ top: 0, behavior: "smooth" });

		await waitForScrollToTop();

		const url = filter
			? `/insights?page=${meta.next}&filter=tag:${filter}`
			: `/insights?page=${meta.next}`;

		goto(url);
};

	const prev = async () => {
		isLoading = true;
		window.scrollTo({ top: 0, behavior: "smooth" });

		await waitForScrollToTop();

		const url = filter
			? `/insights?page=${meta.prev}&filter=tag:${filter}`
			: `/insights?page=${meta.prev}`;

		goto(url);
};
</script>

<div class="flex flex-wrap justify-center my-4">
	<div class="max-w-lg space-x-2 space-y-1 text-center">
		<div class="join">
			<select class="select select-bordered join-item" bind:value={filter}>
				<option value="">All Posts</option>
				{#each tags as tag (tag.id)}
					<option value={tag.slug}>{tag.name}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<div class="container mx-auto flex flex-wrap justify-center gap-8 py-8 relative min-h-96">
	{#if isLoading}
		<div class="absolute inset-0 bg-stone-50/50 backdrop-blur-sm flex items-start justify-center pt-16 z-10">
			<div class="loading loading-spinner loading-lg"></div>
		</div>
	{/if}
	{#each data.posts as post (post.id)}
		{@render postCard(post, newPost(post.published_at), isLoading)}
	{/each}
</div>

<div class="flex flex-col items-center gap-2 mt-8">
	<div class="join">
		<button onclick={() => prev()} class="btn join-item w-24" disabled={meta.prev == null}> Previous </button>
		<button onclick={() => next()} class="btn join-item w-24" disabled={meta.next == null}> Next </button>
	</div>
	<p>
		{#if meta.total === data.posts.length}
			{data.posts.length}
		{:else}
			{high - meta.limit + 1}-{high}
		{/if}
		of {totalItems} Posts
	</p>
</div>
