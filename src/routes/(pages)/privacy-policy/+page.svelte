<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Privacy Policy | Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<div class="flex flex-col max-w-[640px] mx-auto bg-white my-8 px-4">
	<div class="prose my-8">
		<h1>{data.privacyPolicy.title}</h1>
		{@html data.privacyPolicy.html}
	</div>
</div>
