<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Post } from '$lib/data/types';

    export let related: Post;
</script>


<div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src={related.feature_image} alt={related.title} /></figure>
    <div class="card-body h-full flex flex-col justify-between">
        <div class="space-y-2">
            <h2 class="card-title">{related.title}</h2>
            <div class="w-full flex flex-wrap gap-2">
                {#each related.tags as tag (tag.id)}
                    <div class="badge badge-accent badge-outline">{tag.name}</div>
                {/each}
            </div>
        </div>
        <div class="card-actions justify-end">
            <button on:click={() => goto(related.slug)} class="btn btn-primary">Read More...</button>
        </div>
    </div>
</div>