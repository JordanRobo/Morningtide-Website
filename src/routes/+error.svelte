<script lang="ts">
	import { page } from '$app/stores';
    import { Colour } from '$lib/images/logo';
</script>

<div class="navbar bg-base-100 md:px-8 relative z-50">
	<div class="flex-1 -ml-2 md:ml-2 p-2">
        <a href="/">
            <img src={Colour} alt="Morningtide Logo" class="max-h-12 md:max-h-24 max-w-48 object-contain"/>
        </a>
	</div>
</div>

<div class="flex items-center justify-center h-[60vh] md:w-screen">
    <div class="card w-full max-w-xl p-4">
        <div class="card-body bg-primary overflow-hidden rounded-lg px-8 py-6 shadow-xl outline outline-base-content/5 text-white text-center">
            <h1 class="text-accent text-6xl font-bold md:text-8xl">{$page.status}</h1>
                <h2 class="text-2xl mt-4">{$page.error.message}</h2>
            <button class="btn btn-white mt-8" on:click={() => window.history.back()}>Go Back</button>
        </div>
    </div>
</div>