<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { Backpack, IdCard, Pencil2 } from "svelte-radix";

	const handleClick = (location: string) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		goto(`/${location}`);
	};

	const path = $derived(page.url.pathname);

	const active = (slug: string) => {
		return path.includes(slug);
	};
</script>

<div class="dock md:hidden bg-primary text-neutral-content z-50">
	<button onclick={() => handleClick("insights")} class={active("insights") ? "dock-active" : ""}>
		<Pencil2 class="w-5 h-5" />
		<span class="dock-label font-bold">Insights</span>
	</button>
	<button onclick={() => handleClick("services")} class={active("services") ? "dock-active" : ""}>
		<Backpack class="w-5 h-5" />
		<span class="dock-label font-bold">Services</span>
	</button>

	<button onclick={() => handleClick("about")} class={active("about") ? "dock-active" : ""}>
		<IdCard class="w-5 h-5" />
		<span class="dock-label font-bold">About</span>
	</button>
</div>
