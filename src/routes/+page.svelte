<script lang="ts">
	import type { PageData } from './$types';
	import { Hero, Intro } from '$lib/components/ui/home';
	import { Latest } from '$lib/components/ui/posts/cards';

	export let data: PageData;
</script>

<svelte:head>
	<title>Morningtide Consulting</title>
	<meta
		name="description"
		content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy."
	/>
</svelte:head>

<Hero />
<Intro />
<Latest posts={data.posts}/>