<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex justify-center bg-stone-50">
	<article class="prose my-8">
		<h1>{data.privacyPolicy.title}</h1>
		{@html data.privacyPolicy.html}
	</article>
</div>
