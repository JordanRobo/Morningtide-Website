<script lang="ts">
    import type { PageData } from './$types';
    import { Hero, HomeContent }from "$lib";
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
        <div class="max-w-lg lg:max-w-4xl mx-auto"> 
            {#each data.posts as post}
            <div class="hero min-h-[360px]">
                <div class="hero-content flex-col lg:flex-row">
                <img src={post.feature_image} class="max-w-72 md:max-w-sm object-contain rounded-lg shadow-2xl" alt="Something" />
                <div class="space-y-2 px-2">
                    <h4 class="text-accent">{post.title}</h4>
                    <p class="py-2">{post.custom_excerpt}</p>
                    <button on:click={() => goto("/insights/" + post.slug)} class="btn btn-primary">Read more</button>
                </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
