<script lang="ts">
	import { goto } from '$app/navigation';
    import type { Post } from '$lib/data/types';

    export let posts: Post[];
</script>

<div class="container mx-auto">
    <div class="p-6 w-full sm:w-[600px] md:w-[720px] lg:w-[960px] mx-auto space-y-8 my-8">
        {#each posts as post}
            <div class="card lg:card-side bg-white shadow-xl">
                <figure class="lg:w-1/2 max-h-[220px] lg:max-h-[300px]">
                    <img class="object-cover h-full" src={post.feature_image} alt={post.title} width="100%" height="100%" />
                </figure>
                <div class="card-body lg:w-1/2">
                    <h2 class="card-title">{post.title}</h2>
                        <p>{post.custom_excerpt}</p>
                    <div class="card-actions justify-end">
                        <button on:click={() => goto('/insights/' + post.slug)} class="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>