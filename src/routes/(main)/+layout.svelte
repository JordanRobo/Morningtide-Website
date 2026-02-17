<script lang="ts">
	import type { LayoutProps } from './$types';

	interface Banner {
		image: string,
		badge: string,
		heading: string,
		subheading: string,
	};

	let { data, children }: LayoutProps = $props();

	const pageBanner = $derived(data.banner || { image: '', badge: '', heading: '', subheading: '' });
</script>

{@render banner(pageBanner)}
{@render children()}

{#snippet banner(data: Banner)}
	<div class="hero h-72 rounded-br-[120px] md:rounded-br-[220px] relative overflow-hidden">
		<picture class="absolute inset-0 w-full h-full">
			<img src={data.image} alt="Header background" class="w-full h-full object-cover" loading="eager" decoding="async" />
		</picture>
		<div class="hero-overlay backdrop-brightness-50 absolute inset-0 rounded-br-[120px] md:rounded-br-[220px]"></div>
		<div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end relative z-10">
			<div class="text-center lg:text-start">
				<span class="badge badge-outline badge-accent mb-2">{data.badge}</span>
				<h1 class="text-5xl font-bold md:text-6xl text-accent">{data.heading}</h1>
				<p class="py-2 font-medium lg:max-w-lg text-white">{data.subheading}</p>
			</div>
		</div>
	</div>
{/snippet}
