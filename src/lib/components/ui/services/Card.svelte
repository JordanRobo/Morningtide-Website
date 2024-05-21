<script lang="ts">
	import { Cross1 } from "svelte-radix";

</script>


<dialog id="services_card" class="modal">
    <div class="modal-box card max-w-sm bg-primary text-white flex flex-col rounded-br-[120px]">
        <div class="card-body flex-grow">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={() => document.getElementById('services_card')?.close()}><Cross1 class="h-4 w-4" /></button>
            <h2 class="card-title text-3xl font-bold text-accent">Title</h2>
            <p class="text-md font-medium opacity-70">Body</p>
        </div>
        <div class="card-footer flex justify-start mt-4 p-2">
            <button class="btn btn-white">Next</button>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

<style>
    
</style>