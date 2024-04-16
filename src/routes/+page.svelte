<script lang="ts">
    import type { PageData } from './$types';
    import { Hero, HomeContent, LatestPost }from "$lib";
    import { goto } from "$app/navigation";
    export let data: PageData;
</script>

<svelte:head>
    <title>Morningtide Consulting</title>
    <meta name="description" content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy.">
</svelte:head>


<div>
    <Hero title={data.posts[0].title} subtitle={data.posts[0].custom_excerpt} click={() => goto("/insights/" + data.posts[0].slug)} />
    <div class="flex flex-col text-center lg:flex-row lg:justify-around bg-primary p-4">
        <div>
            <span class="text-white opacity-60">Mon-Fri 8:00 - 18:00 (AEDT)</span>
        </div>
        <div>
            <span class="text-white opacity-60">Melbourne | Sydney | Brisbane | Adelaide | Perth</span>
        </div>
        <div>
            <span class="text-white opacity-60">info@morningtide.com.au</span>
        </div>
    </div>
    <div class="text-center bg-accent p-6 space-y-4">
        <div>
            <h3 class="text-white">Wondering How You Could Create<br>A Compelling School Strategy?</h3>
        </div>
        <div>
            <button class="btn btn-outline btn-primary">Get Started</button>
        </div>
    </div>
    <HomeContent />
</div>
<div class="container mx-auto">
    <div class="bg-stone-50">
        <div class="w-[280px] sm:w-[600px] md:w-[720px] lg:w-[960px] mx-auto space-y-8 my-8"> 
            {#each data.posts as post}
                <LatestPost title={post.title} image={post.feature_image} custom_excerpt={post.custom_excerpt} slug={post.slug} />
            {/each}
        </div>
    </div>
</div>
