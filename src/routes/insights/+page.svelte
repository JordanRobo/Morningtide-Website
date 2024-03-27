<script lang="ts">
    import { goto } from '$app/navigation';
    export let data;

    function isRecent(dateString: string) {
        const postDate = new Date(dateString);
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return postDate >= oneWeekAgo;
    };

    data.posts.sort((a: any, b: any) => {
        const dateA: any = new Date(a.date);
        const dateB: any = new Date(b.date);
        return dateB - dateA;
    });

</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-8 gap-8">
{#each data.posts as post}
    <div class="card w-full bg-base-100 shadow-xl">
        <figure><img class="object-cover w-full h-48" src="{post.attributes.image}" alt="{post.attributes.title}" /></figure>
        <div class="card-body space-y-2">
        <h2 class="card-title h2 text-2xl">
            {post.attributes.title}
            {#if isRecent(post.attributes.date)}
                <div class="badge badge-accent">NEW</div>
            {/if}
        </h2>
        <p>{post.attributes.subtitle}</p>
        <div class="card-actions justify-between">
            <div class="self-end">
                <div class="badge badge-primary badge-outline">{post.attributes.tags[0]}</div> 
                <div class="badge badge-primary badge-outline">{post.attributes.tags[1]}</div>
            </div>
            <div>
            <button on:click={() => goto("insights/" + post.attributes.url)} class="btn btn-primary">Read More...</button>
            </div>
          </div>
        </div>
    </div>
{/each}
</div>