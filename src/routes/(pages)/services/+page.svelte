<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;

    // TODO: Create these pages
</script>

<svelte:head>
	<title>Services | Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<div class="flex flex-col max-w-[640px] mx-auto bg-white my-8 px-4">
	<div class="prose my-8 text-center">
        <img src={data.whoops.feature_image} alt="Whoops" />
		<h1>{data.whoops.title}</h1>
		{@html data.whoops.html}
        <button on:click={() => goto("/")} class="btn btn-primary">Return Home</button>
	</div>
</div>