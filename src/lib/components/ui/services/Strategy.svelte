<script lang="ts">
    import { activeService } from "$lib/stores";
    import { Essence } from "$lib/images/uploads";
    import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';


    function updateService(input: any) {
        activeService.set(input);
    }

    let currentCard = 0;

    function nextCard() {
        currentCard = (currentCard + 1) % 3;
    }
</script>

<div class="mt-10 flex flex-col items-center justify-center md:mt-20">
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-2xl font-bold md:text-5xl">How we help your strategy</h1>
        <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">You are the experts in your school. Our role is to listen and help you uncover your answers.</span>
    </div>

    <div class="container mt-10 gap-10 p-4">
        {#if currentCard === 0}
            <div out:fly={{ duration: 350, easing: quintOut, x: 100 }} in:fly={{ delay: 450, duration: 450, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex flex-col rounded-bl-[120px] min-h-72">
                <div class="card-body flex-grow">
                    <h2 class="text-3xl font-bold text-accent">
                        Did you know?
                    </h2>
                    <h1 class="text-8xl">71%</h1>
                    <p class="text-md font-medium opacity-70">
                        of employees cannot recognise their own company's strategy in a multiple choice question.
                    </p>
                    <p class="italic opacity-50">Source: Harvard Business Review (2013)</p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
        {:else if currentCard === 1}
        <div out:fly={{ duration: 350, easing: quintOut, x: 100 }} in:fly={{ delay: 450, duration: 450, easing: quintOut, x: -100 }} class="card lg:card-side w-full p-4 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72">
        <figure class="mx-auto w-1/2 lg:w-full relative">
            <picture class="w-full h-full">
                <source
                    type="image/avif"
                    srcset="{Essence.avif['300w']} 300w, {Essence.avif['600w']} 600w, {Essence.avif['1200w']} 1200w"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <source
                    type="image/webp"
                    srcset="{Essence.webp['300w']} 300w, {Essence.webp['600w']} 600w, {Essence.webp['1200w']} 1200w"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <img
                    src={Essence.webp['600w']}
                    alt="Essence of Strategy"
                    class="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </figure>
        <div class="card-body">
            <h2 class="text-3xl font-bold text-accent">
                Compelling strategy
            </h2>
            <p class="text-md font-medium text-white opacity-70">
                First, we help you distil what we call the "essence of strategy". This is the starting point for your strategy.
            </p>
            <p class="text-md font-medium text-white opacity-70">
                Next, we help you and your team craft a compelling strategy, fleshing out your goals, milestones, and key performance metrics.
            </p>
            <div class="card-actions justify-end mr-4">
                <button class="btn btn-white" on:click={nextCard}>Next..</button>
            </div>
        </div>
    </div>
        {:else if currentCard === 2}
            <div out:fly={{ duration: 350, easing: quintOut, x: 100 }} in:fly={{ delay: 450, duration: 450, easing: quintOut, x:-100 }} class="card w-full py-4 px-12 bg-white border flex rounded-bl-[120px] min-h-72">
                <div class="card-body lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Successful execution
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        Finally, we spend the remainder of our 12 months with you helping to champion the strategy and ensure its successful implementation. 
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={() => updateService('')}>Return to services</button>
                </div>
            </div>
        {/if}
    </div>
</div>
