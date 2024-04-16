<script lang="ts">
    import type { PageData } from './$types';
    import PostCard from '$lib/components/PostCard.svelte';
    export let data: PageData;
</script>

<div class="flex flex-wrap justify-center gap-8 my-8">
    {#each data.posts as post}
        <PostCard title={post.title} custom_excerpt={post.custom_excerpt} feature_image={post.feature_image} slug={post.slug} />
    {/each}
</div>