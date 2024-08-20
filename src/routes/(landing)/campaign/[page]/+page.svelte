<script lang="ts">
	import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    import { writable } from "svelte/store";

    const form_completed = writable(false);

    export let data: PageData;

    $: ({ page } = data);

    function form_submit(){
        $form_completed = !$form_completed
    };

</script>

<main class="container mx-auto">
    {#if $form_completed}
        <div><h1>Video</h1></div>
    {:else}
        <div class="grid grid-cols-3 gap-4 p-4">
            <div class="col-span-2 w-full h-48 space-y-4">
                <div class="p-4">
                    <img src={page.feature_image} alt={page.title} class="h-96 rounded-br-[120px] md:rounded-br-[220px]" />
                </div>
                <div class="card bg-white border flex flex-col min-h-72 p-4">
                    <div class="card-body space-y-4">
                        <h1 class="text-5xl font-bold text-accent">{page.title}</h1>
                        <hr class="border-accent" />
                        <div class="prose max-w-full">
                            {@html page.html}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-primary flex flex-col min-h-72 p-4 mt-4">
                <div class="card-body space-y-4">
                    <div class="card-title"><h2 class="text-3xl text-white">Enter details to view video</h2></div>
                    <form method="POST" action="?/" use:enhance>
                        <label class="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" class="grow" placeholder="daisy@site.com" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    {/if}
</main>
