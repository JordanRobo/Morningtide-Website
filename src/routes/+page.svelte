<script lang="ts">
    import type { PageData } from './$types';
    import { Hero, HomeContent, RecentPostLeft, RecentPostRight }from "$lib";
    import { goto } from "$app/navigation";
    export let data: PageData;

    console.log(data);

    let posts = data.posts;
</script>

<svelte:head>
    <title>Morningtide Consulting</title>
    <meta name="description" content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy.">
</svelte:head>

<Hero title={posts[0].title} subtitle={posts[0].custom_excerpt} click={() => goto("/insights/" + posts[0].slug)} />

<div class="flex justify-around bg-primary p-4">
    <div>
        <h3 class="h3 text-white opacity-60">Mon-Fri 8:00 - 18:00 (AEDT)</h3>
    </div>
    <div>
        <h3 class="h3 text-white opacity-60">Melbourne | Sydney | Brisbane | Adelaide | Perth</h3>
    </div>
    <div>
        <h3 class="h3 text-white opacity-60">info@morningtide.com.au</h3>
    </div>
</div>

<HomeContent />

<div class="bg-stone-50">
    <div class="max-w-4xl mx-auto "> 
        <RecentPostLeft image={posts[0].feature_image} title={posts[0].title} excerpt={posts[0].custom_excerpt} click={() => goto("/insights/" + posts[0].slug)} />
        <RecentPostRight image={posts[1].feature_image} title={posts[1].title} excerpt={posts[1].custom_excerpt} click={() => goto("/insights/" + posts[1].slug)} />
        <RecentPostLeft image={posts[2].feature_image} title={posts[2].title} excerpt={posts[2].custom_excerpt} click={() => goto("/insights/" + posts[2].slug)} />
    </div>
</div>