<script lang="ts">
    import { ChevronRight } from 'svelte-radix';
    import { values } from '$lib/data';
</script>

<div class="flex flex-col max-w-screen-lg mx-auto p-4 gap-4">
    <div class="flex flex-col items-center my-6">
        <h1 class="text-center text-2xl font-bold md:text-5xl">Our Values</h1>
        <span class="divider divider-accent w-48 mx-auto"></span> 
    </div>
    <div class="flex flex-wrap justify-center gap-8">
        {#each values as { icon, title, body }}
            <label class="swap swap-flip">
                <input type="checkbox" />
                <div class="card w-64 h-44 text-white swap-off rounded-br-[96px] bg-gradient-to-br from-primary/100 to-primary/80">
                    <div class="card-body">
                        <img src={icon} alt="Icon" class="h-10 w-10">
                        <h4>{title}</h4>
                        <ChevronRight class="h-7 w-7" />
                    </div>
                </div>
                <div class="card w-64 bg-white swap-on rounded-bl-[96px] border">
                    <div class="grid h-44 place-items-center p-2 -mt-2">
                        <p class="text-center">{body}</p>
                    </div>
                </div>
            </label>
        {/each}
    </div>
</div>