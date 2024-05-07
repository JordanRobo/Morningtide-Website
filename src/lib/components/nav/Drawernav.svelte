<script lang="ts">
    import { tagLink } from '$lib/utils';

    const services = [
		{ title: 'Competitor Analysis', url: '/services' },
		{ title: 'Customer Experience Audit', url: '/services' },
		{ title: 'Financial Forecast Review', url: '/services' },
		{ title: 'Strategy Planning', url: '/services' }
	];

	export let insights: { name: string, slug: string }[];

</script>


<li>
    <details>
        <summary class="text-primary">Insights</summary>
        <ul>
            <li><a href="/insights">View All</a></li>
            {#each insights as insight}
                <li><a href={tagLink(insight.slug)}>{insight.name}</a></li>
            {/each}
        </ul>
    </details>
</li>
<li>
    <details>
        <summary class="text-primary">Services</summary>
        <ul>
            <li><a href="/services">View All</a></li>
            {#each services as service}
				<li><a href={service.url}>{service.title}</a></li>
			{/each}
        </ul>
    </details>
</li>
<li class="text-primary"><a href="/about">About</a></li>
<li class="text-primary"><a href="https://courses.morningtide.com.au/">Courses</a></li>

