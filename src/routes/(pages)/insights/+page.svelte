<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    export let data: PageData;

    console.log(data);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-8 gap-8">
{#each data.posts as post}
    <div class="card w-full bg-base-100 shadow-xl">
        <figure><img class="object-cover w-full h-48" src="{post.feature_image}" alt="{post.title}" /></figure>
        <div class="card-body space-y-2">
        <h2 class="card-title h2 text-2xl">
            {post.title}
        </h2>
        <p>{post.custom_excerpt}</p>
        <div class="card-actions justify-between">
            <div class="self-end">

            </div>
            <div>
            <button on:click={() => goto("insights/" + post.slug )} class="btn btn-primary">Read More...</button>
            </div>
          </div>
        </div>
    </div>
{/each}
</div>