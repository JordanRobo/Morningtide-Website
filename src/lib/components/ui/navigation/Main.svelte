<script lang="ts">
	import Colour from '$lib/images/logo/MC-Logo-2020-FC_CMYK.png?enhanced';
	import { drawer, tagFilter, activeService } from '$lib/stores';
	import { services } from '$lib/data';
	import { goto } from '$app/navigation';

	export let insights: { name: string, slug: string }[];

	function handleTag(tag: string) {
		tagFilter.set(tag);
		goto("/insights");
	}

	function handleClick(input: any) {
        activeService.set(input);
		goto("/services");
    }
</script>

<nav class="navbar bg-base-100 md:px-8 relative z-50">
	<div class="flex-1 -ml-2 md:ml-2">
		<a href="/">
			<enhanced:img src={Colour} alt="Morningtide Logo" class="max-h-16 md:max-h-24 max-w-48 object-contain"/>
		</a>
	</div>
	<div class="flex-none lg:hidden">
		<button class="btn btn-square btn-ghost" on:click={drawer.toggle} aria-label="Toggle menu">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</button>
	</div>
	<div class="flex-none hidden lg:block">
		<ul class="menu menu-horizontal">
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<a role="button" tabindex="0" class="text-primary" href="/insights">Insights</a>
					<ul class="dropdown-content z-[60] menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><button on:click={() => handleTag('')} class="text-primary">View All</button></li>
						<div class="divider -my-2"></div> 
						{#each insights as insight}
							<li><button on:click={() => handleTag(insight.slug)}>{insight.name}</button></li>
						{/each}
					</ul>
				</div>
			</li>
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<button class="text-primary" on:click={() => handleClick('')}>Services</button>
					<ul class="dropdown-content z-[60] menu p-2 shadow bg-base-100 rounded-box w-52">
						{#each services.service as service}
							<li><button on:click={() => handleClick(service.url)}>{service.title}</button></li>
						{/each}
					</ul>
				</div>
			</li>
			<li class="text-primary"><a href="/about">About</a></li>
			<li class="text-primary"><a href="/courses">Courses</a></li>
		</ul>
	</div>
</nav>