<script lang="ts">
    export let data;

    function isRecent(dateString) {
        const postDate = new Date(dateString);
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return postDate >= oneWeekAgo;
    };
</script>

<div class="grid grid-cols-3 p-8 gap-8 bg-stone-50">
{#each data.posts as post}
    <div class="card w-full bg-base-100 shadow-xl">
        <figure><img class="object-cover w-full h-48" src="{post.image}" alt="{post.title}" /></figure>
        <div class="card-body space-y-2">
        <h2 class="card-title h2 text-2xl">
            {post.title}
            {#if isRecent(post.date)}
                <div class="badge badge-accent">NEW</div>
            {/if}
        </h2>
        <p>{post.subtitle}</p>
        <div class="card-actions justify-between">
            <div class="self-end">
                <div class="badge badge-primary badge-outline">{post.tags[0]}</div> 
                <div class="badge badge-primary badge-outline">{post.tags[1]}</div>
            </div>
            <div>
            <button class="btn btn-primary">Read More...</button>
            </div>
          </div>
        </div>
    </div>
{/each}
</div>