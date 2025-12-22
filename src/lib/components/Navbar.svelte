<script lang="ts">
	import * as services from "$lib/data/services.json";
	import { page } from "$app/state";
	import { fade } from "svelte/transition";

	let { data } = $props();

	let isCampaign = $derived(page.url.toString().includes("campaign"));

	const tags = $derived(data?.tags);
</script>

<nav class="navbar bg-base-100 md:px-8">
	<div class="ps-4">
		<a href="/">
			<img src="/images/logo/colour.png" alt="Morningtide Logo" class="max-h-16 md:max-h-20 max-w-48 object-contain" />
		</a>
	</div>
	<div class="hidden md:flex grow justify-end px-2">
		<div class="flex items-stretch">
			{#if !isCampaign}
				<div transition:fade={{ duration: 300 }} class="dropdown dropdown-hover dropdown-end">
					<a href="/insights" class="btn btn-ghost text-primary font-medium">Insights</a>
					<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
						<li><a href="/insights" class="text-primary">View All</a></li>
						<div class="divider -my-2"></div>
						{#if tags}
							{#each tags as insight}
								<li><a href="/insights?filter=tag:{insight.slug}">{insight.name}</a></li>
							{/each}
						{/if}
					</ul>
				</div>
				<div transition:fade={{ duration: 300 }} class="dropdown dropdown-hover dropdown-end">
					<a href="/services" class="btn btn-ghost text-primary font-medium">Services</a>
					<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
						{#each services.services as service}
							<li><a href="/services?service={service.id}">{service.title}</a></li>
						{/each}
					</ul>
				</div>
				<a transition:fade={{ duration: 300 }} href="/about" class="btn btn-ghost text-primary font-medium">About</a>
			{/if}
		</div>
	</div>
</nav>
