<script lang="ts">
    import { activeService } from "$lib/stores";
    import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';


    function updateService(input: string) {
        activeService.set(input);
    }

    let currentCard = 0;

    function nextCard() {
        currentCard = (currentCard + 1) % 5;
    }
</script>

<div class="mt-10 flex flex-col items-center justify-center md:mt-20">
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-2xl font-bold md:text-5xl">How we analyse your competition</h1>
        <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Your competition is the school next-door. It's possible they are also your collaborative partners.</span>
    </div>

    <div class="container mt-10 gap-10 p-4">
        {#if currentCard === 0}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex flex-col rounded-bl-[120px] min-h-72">
                <div class="card-body flex-grow">
                    <h2 class="text-3xl font-bold text-accent">
                        Did you know?
                    </h2>
                    <h1 class="text-8xl">92%</h1>
                    <p class="text-md font-medium opacity-70">
                        of organisations reported they do not track the key performance indicators to tell them how well they are doing in competition.
                    </p>
                    <p class="italic opacity-50">Source: Organizational Synergies</p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
        {:else if currentCard === 1}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72 ">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Competitive advantage
                    </h2>
                    <p class="text-md font-medium opacity-70 text-white">
                        To succeed as an organisation, schools need a point of difference to their competitors. 
                    </p>
                    <p class="text-md font-medium opacity-70 text-white">
                        Often, it's not obvious so undertaking discovery analysis is important. This is not cloak and dagger stuff. It's merely harnessing your strengths that are different to others.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2 mr-10">
                    <button class="btn btn-white" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 2}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border rounded-bl-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Demography
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        The location you serve is often dynamic. 
                    </p>
                    <p class="text-md font-medium opacity-70">
                        We review population growth, age distributions, economic profiles, and lifestyle preferences. Then we map it against your enrolment history and search for untapped insights.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 3}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Reputational voice
                    </h2>
                    <p class="text-md font-medium opacity-70 text-white">
                        Our reputational analysis assesses your school against local competitors. It seeks to understand the magnitude of your school’s, and your competitor’s, voices and the effect they have within the community.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2 mr-10">
                    <button class="btn btn-white" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 4}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex rounded-bl-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Prospective competition
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        Your target market is a fluid concept. The moment it’s perceived as desirable by others elevates your chance of increased competition. 
                    </p>
                    <p class="text-md font-medium opacity-70">
                        We assess your market for future competition and identify opportunities for your growth, or pinpoint which competitors may desire moving in.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={() => updateService('')}>Return to services</button>
                </div>
            </div>
            {/if}
    </div>
</div>
