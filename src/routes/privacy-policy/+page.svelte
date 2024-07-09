<script lang="ts">
	// src/routes/privacy-policy/+page.svelte
	
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

<div class="container max-w-3xl flex flex-col mx-auto bg-white my-8">
	<div class="prose my-12 mx-auto">
		<h1>{data.privacyPolicy.title}</h1>
		{@html data.privacyPolicy.html}
	</div>
</div>
