<script lang="ts">
    import { activeService } from "$lib/stores";
    import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';


    function updateService(input: string) {
        activeService.set(input);
    }

    let currentCard = 0;

    function nextCard() {
        currentCard = (currentCard + 1) % 3;
    }
</script>

<div class="mt-10 flex flex-col items-center justify-center md:mt-20">
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-2xl font-bold md:text-5xl">How we help your financial forecasts</h1>
        <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Resourcing your strategy is possibly the most important piece of the implementation puzzle.</span>
    </div>

    <div class="container mt-10 gap-10 p-4">
        {#if currentCard === 0}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex flex-col rounded-bl-[120px] min-h-72">
                <div class="card-body flex-grow">
                    <h2 class="text-3xl font-bold text-accent">
                        Did you know?
                    </h2>
                    <h1 class="text-8xl">64%</h1>
                    <p class="text-md font-medium opacity-70">
                        of successful companies build their budget based on their strategy, rather than on past behaviors.
                    </p>
                    <p class="italic opacity-50">Source: Palladium</p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
        {:else if currentCard === 1}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Assumptions audit
                    </h2>
                    <p class="text-md font-medium opacity-70 text-white">
                        Morningtide reviews the assumptions made within the financial forecast and compares that with the current strategy. 
                    </p>
                    <p class="text-md font-medium opacity-70 text-white">
                        All assumptions are tested whether they are explicit or implied.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2 mr-10">
                    <button class="btn btn-white" on:click={nextCard}>Next..</button>
                </div>
            </div>
        {:else if currentCard === 2}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex rounded-bl-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Calculation review
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        We check the calculations for accuracy and ensure that your forecasted Statement of Position, Statement of Financial Performance, and Statement of Cash Flows all align.
                    </p>
                    <p class="text-md font-medium opacity-70">
                        We also identify any areas of opportunity.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={() => updateService('')}>Return to services</button>
                </div>
            </div>
        {/if}
    </div>
</div>
