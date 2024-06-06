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
        <h1 class="text-center text-2xl font-bold md:text-5xl">How we help your customer experience</h1>
        <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Your ideal customer spends 13 years with you. Their experience echoes much longer.</span>
    </div>

    <div class="container mt-10 gap-10 p-4">
        {#if currentCard === 0}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full p-4 bg-white border flex flex-col rounded-bl-[120px] min-h-72">
                <div class="card-body flex-grow text-center">
                    <h2 class="text-3xl font-bold text-accent">
                        Did you know?
                    </h2>
                    <h1 class="text-8xl">31%</h1>
                    <p class="text-md font-medium opacity-70">
                        of organisations recognise and reward employees across the company for improving the customer experience.
                    </p>
                    <p class="italic opacity-50">Source: Forrester Research</p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
        {:else if currentCard === 1}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full p-4 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72">
                <div class="card-body text-center lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Research
                    </h2>
                    <p class="text-md font-medium opacity-70 text-white">
                        Morningtide undertakes research via surveys and focus groups to ascertain common themes and opportunities to differentiate.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2 mr-10">
                    <button class="btn btn-white" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 2}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full p-4 bg-white border rounded-bl-[120px] min-h-72">
                <div class="card-body text-center lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Comms audit
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        We audit sample hard and e-copy communications that students and parents receive from your school.  
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 3}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full p-4 bg-gradient-to-br from-primary/100 to-primary/80 border rounded-br-[120px] min-h-72">
                <div class="card-body text-center lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        Complaints registry audit
                    </h2>
                    <p class="text-md font-medium opacity-70 text-white">
                        Your complaints registry often illuminates patterns and themes where CX has been compromised. Auditing this registry will provide deep insights for further research.
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2 mr-10">
                    <button class="btn btn-white" on:click={nextCard}>Next..</button>
                </div>
            </div>
            {:else if currentCard === 4}
            <div out:scale={{ duration: 350, easing: quintOut, start: 0.7, opacity: 0 }} in:fly={{ delay: 350, duration: 350, easing: quintOut, x:-100 }} class="card w-full p-4 bg-white border flex rounded-bl-[120px] min-h-72">
                <div class="card-body text-center lg:p-12">
                    <h2 class="text-3xl font-bold text-accent">
                        NPS benchmarking
                    </h2>
                    <p class="text-md font-medium opacity-70">
                        Your Net Promoter Score (NPS) is a quick and simple test to understand real-time CX. Used as an ongoing gauge it provides benchmarking oppotunities. 
                    </p>
                </div>
                <div class="card-footer flex justify-end mt-2 p-2">
                    <button class="btn btn-primary" on:click={() => updateService('')}>Return to services</button>
                </div>
            </div>
            {/if}
    </div>
</div>
