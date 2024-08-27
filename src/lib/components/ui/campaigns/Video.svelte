<script lang="ts">
	export let html;
</script>

<div class="p-2 md:p-4 space-y-8">
	<div class="mt-4 relative overflow-hidden w-full aspect-video">
		<iframe
			class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
			src="https://www.youtube.com/embed/dQw4w9WgXcQ"
			title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
	<div class="flex flex-row gap-4">
		<div class="self-center">
			<span class="badge badge-accent badge-lg">Tag</span>
		</div>
		<div>
			<h1 class="text-4xl md:text-6xl font-bold">Video Title</h1>
			<h2 class="text-2xl md:text-4xl">Sub Title</h2>
		</div>
	</div>
	<div class="card bg-primary border flex flex-col min-h-72 md:w-2/3 p-4">
		<div class="card-body">
			<hr class="border-accent" />
			<div class="prose max-w-full text-white">
				<!-- eslint-disable svelte/no-at-html-tags -->
				{@html html}
				<!--eslint-enable-->
			</div>
		</div>
	</div>
</div>
