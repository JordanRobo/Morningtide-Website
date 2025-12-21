<script lang="ts">
	import * as services from "$lib/data/services.json";
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { fade } from "svelte/transition";

	let { data } = $props();

	let isCampaign = $derived(page.url.toString().includes("campaign"));

	const handleClick = (title: string) => {
		goto(`/services?service=${title}`);
	};

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
					<button class="btn btn-ghost text-primary font-medium" onclick={() => goto("/insights")}>Insights</button>
					<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
						<li><button onclick={() => goto("/insights")} class="text-primary">View All</button></li>
						<div class="divider -my-2"></div>
						{#if tags}
							{#each tags as insight}
								<li><button onclick={() => goto(`/insights?filter=tag:${insight.slug}`)}>{insight.name}</button></li>
							{/each}
						{/if}
					</ul>
				</div>
				<div transition:fade={{ duration: 300 }} class="dropdown dropdown-hover dropdown-end">
					<button class="btn btn-ghost text-primary font-medium" onclick={() => goto("/services")}>Services</button>
					<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
						{#each services.services as service}
							<li><button onclick={() => handleClick(service.id)}>{service.title}</button></li>
						{/each}
					</ul>
				</div>
				<button transition:fade={{ duration: 300 }} class="btn btn-ghost text-primary font-medium" onclick={() => goto("/about")}>About</button>
			{/if}
		</div>
	</div>
</nav>
