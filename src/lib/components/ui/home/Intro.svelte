<script lang="ts">
	import { AboutFeat, InsightsFeat, ServicesFeat } from "$lib/images/uploads";
	import { onMount } from 'svelte';

	let isLargeScreen = false;

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 1024px)');
		isLargeScreen = mediaQuery.matches;
		mediaQuery.addEventListener('change', (e) => isLargeScreen = e.matches);

		return () => {
			mediaQuery.removeEventListener('change', (e) => isLargeScreen = e.matches);
		};
	});
</script>

<div class="bg-white">
	<div class="max-w-screen-lg mx-auto p-4">
		<div class="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-8 md:py-8 text-center lg:text-left">
			{#if isLargeScreen}
				<div>
					<picture>
						<source
							type="image/avif"
							srcset="{AboutFeat.avif['300w']} 300w, {AboutFeat.avif['600w']} 600w, {AboutFeat.avif['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<source
							type="image/webp"
							srcset="{AboutFeat.webp['300w']} 300w, {AboutFeat.webp['600w']} 600w, {AboutFeat.webp['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<img
							src={AboutFeat.webp['1200w']}
							alt="Morningtide Consulting Team"
							class="h-full object-cover rounded-tr-[120px]"
							loading="lazy"
							width="300"
							height="300"
						/>
					</picture>
				</div>
				<div class="col-start-1 row-start-2">
					<picture>
						<source
							type="image/avif"
							srcset="{InsightsFeat.avif['300w']} 300w, {InsightsFeat.avif['600w']} 600w, {InsightsFeat.avif['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<source
							type="image/webp"
							srcset="{InsightsFeat.webp['300w']} 300w, {InsightsFeat.webp['600w']} 600w, {InsightsFeat.webp['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<img
							src={InsightsFeat.webp['1200w']}
							alt="Insights Feature"
							class="h-full object-cover rounded-bl-[120px]"
							loading="lazy"
							width="300"
							height="300"
						/>
					</picture>
				</div>
				<div class="col-start-2 row-start-2">
					<picture>
						<source
							type="image/avif"
							srcset="{ServicesFeat.avif['300w']} 300w, {ServicesFeat.avif['600w']} 600w, {ServicesFeat.avif['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<source
							type="image/webp"
							srcset="{ServicesFeat.webp['300w']} 300w, {ServicesFeat.webp['600w']} 600w, {ServicesFeat.webp['1200w']} 1200w"
							sizes="(max-width: 1024px) 0px, 25vw"
						/>
						<img
							src={ServicesFeat.webp['1200w']}
							alt="Services Feature"
							class="h-full object-cover rounded-tr-[120px]"
							loading="lazy"
							width="300"
							height="300"
						/>
					</picture>
				</div>
			{/if}
			<div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:ml-8">
				<h2 class="text-accent text-4xl font-bold mb-4">Ready to Craft Your School Strategy?</h2>
				<p class="mb-2">
					Many independent school leaders view school strategy in one of two ways. Either they are keen
					to get started but not sure how, or past experiences have numbed the desire, and the
					pressure to deliver the school's strategic plan now evokes anxiety and stress. <span class="font-bold">You are not alone.</span>
				</p>
			</div>
			<div class="lg:col-span-2 lg:row-start-2 lg:self-end lg:ml-6">
				<h3 class="text-accent text-3xl font-bold mb-2">How We Can Help</h3>
				<p class="mb-2">
					Morningtide Consulting can help you craft a compelling school strategy. We then provide you an
					unconventional framework to successfully implement it - while keeping your stakeholders
					engaged and committed.
				</p>
				<p class="mb-2">
					Take a look around our site and read some of our articles, service offerings, and
					recommendations.
				</p>
				<p>When you are ready, book an <a href="/services" class="link link-accent">obligation-free consultation.</a></p>
			</div>
		</div>
	</div>
</div>