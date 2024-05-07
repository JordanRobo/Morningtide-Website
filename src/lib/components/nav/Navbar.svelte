<script lang="ts">
	import logo from '$lib/images/MC-Logo-2020-FC_CMYK.png';
	import { drawer } from '$lib/stores';
	import { tagLink } from '$lib/utils';

	const services = [
		{ title: 'Competitor Analysis', url: '/services' },
		{ title: 'Customer Experience Audit', url: '/services' },
		{ title: 'Financial Forecast Review', url: '/services' },
		{ title: 'Strategy Planning', url: '/services' }
	];

	export let insights: { name: string, slug: string }[];

</script>

<div class="navbar bg-base-100 md:px-8">
	<div class="flex-1 px-2 mx-2">
		<a href="/">
			<img src={logo} alt="Morningtide Logo" class="max-h-16 md:max-h-24 min-w-24 object-contain"/>
		</a>
	</div>
	<div class="flex-none lg:hidden">
		<button class="btn btn-square btn-ghost" on:click={drawer.toggle}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</button>
	</div>
	<div class="flex-none hidden lg:block">
		<ul class="menu menu-horizontal">
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<a role="button" class="text-primary" href="insights">Insights</a>
					<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href="/insights">View All</a></li>
						<div class="divider"></div> 
						{#each insights as insight}
							<li><a href={tagLink(insight.slug)}>{insight.name}</a></li>
						{/each}
					</ul>
				</div>
			</li>
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<a role="button" class="text-primary" href="services">Services</a>
					<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
						{#each services as service}
							<li><a href={service.url}>{service.title}</a></li>
						{/each}
					</ul>
				</div>
			</li>
			<li class="text-primary"><a href="about">About</a></li>
			<li class="text-primary"><a href="https://courses.morningtide.com.au/">Courses</a></li>
		</ul>
	</div>
</div>