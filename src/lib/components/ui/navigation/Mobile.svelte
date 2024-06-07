<script lang="ts">
    import { services } from '$lib/data';
    import { EnvelopeClosed, Home, InstagramLogo, LinkedinLogo, Mobile, TwitterLogo } from 'svelte-radix';
    import { goto } from '$app/navigation';
	import { activeService, tagFilter } from '$lib/stores';

	export let insights: { name: string, slug: string }[];

    function handleTag(tag: string) {
		tagFilter.set(tag);
		goto("/insights");
	}

    function handleClick(input: string) {
        activeService.set(input);
		goto("/services");
    }

</script>

<ul class="menu p-4 w-72 min-h-full bg-white rounded-bl-[180px] justify-between text-primary text-md font-bold">
    <div>
        <li>
            <details>
                <summary class="text-primary">Insights</summary>
                <ul>
                    <li><button on:click={() => handleTag('')}>View All</button></li>
                    {#each insights as insight}
                        <li><button on:click={() => handleTag(insight.slug)}>{insight.name}</button></li>
                    {/each}
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary class="text-primary">Services</summary>
                <ul>
                    <li><button class="text-primary" on:click={() => handleClick('')}>View All</button></li>
                    {#each services.service as service}
                    <li><button on:click={() => handleClick(service.url)}>{service.title}</button></li>
                    {/each}
                </ul>
            </details>
        </li>
        <li class=""><a href="/about">About</a></li>
        <li class=""><a href="https://courses.morningtide.com.au/" target="_blank">Courses</a></li>
    </div>
    <div class="pb-24 pl-4">
        <div class="mt-6 space-y-4 md:mt-8">
            <p class="-mx-2 flex items-start">
                <Home class="mx-2 h-4 w-4" />
                <span class="mx-2 text-sm">Kew, Melbourne VIC</span>
            </p>
            <p class="-mx-2 flex items-start">
                <Mobile class="mx-2 h-4 w-4"/>
                <span class="mx-2 text-sm">0403 987 946</span>
            </p>
            <p class="-mx-2 flex items-start">
                <EnvelopeClosed class="mx-2 h-4 w-4" />
                <span class="mx-2 text-sm">info@morningtide.com.au</span>
            </p>
        </div>
        <div class="mt-6 md:mt-8">
            <p class="">Follow us</p>
            <div class="-mx-1.5 mt-4 flex">
                <a class="" href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="linkedin">
                    <LinkedinLogo class="mx-2 h-6 w-6" />
                </a>
                <a class="" href="https://twitter.com/Morningtide_Go" aria-label="twitter">
                    <TwitterLogo class="mx-2 h-6 w-6" />
                </a>
                <a class="" href="https://www.instagram.com/morningtide.consulting/" aria-label="instagram">
                    <InstagramLogo class="text-primary mx-2 h-6 w-6" />
                </a>
            </div>
        </div>
    </div>
</ul>