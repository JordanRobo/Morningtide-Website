<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/insights">Insights</a></li>
		<li>{data.post.title}</li>
	</ul>
</div>
<div class="bg-fixed bg-center bg-cover min-h-[500px]" style="background-image: url({data.post.feature_image})"></div>
<slot />
