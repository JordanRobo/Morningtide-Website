<script lang="ts">
	import { White } from '$lib/images/logo';
	import { InstagramLogo, LinkedinLogo, TwitterLogo } from 'svelte-radix';
</script>

<footer class="footer p-10 bg-primary text-white md:grid-cols-6 md:space-x-4">
	<nav class="md:col-start-2 md:col-span-2">
		<h6 class="footer-title font-heading">Who Are We?</h6>
		<p class="font-body text-sm">
			Morningtide is a specialist consultancy working with independent school Boards, Principals,
			and their teams to create compelling strategy. We are dedicated to ensuring the success of
			your strategic execution, and our goal is to establish a sustained culture of strategic
			planning within your school long after our job is complete.
		</p>
	</nav>
	<nav class="md:col-start-4 md:justify-self-end">
		<h6 class="footer-title font-heading">Site Links</h6>
		<a href="/privacy-policy" class="link link-hover">Privacy Policy</a>
		<a href="/about" class="link link-hover font-body">About</a>
		<a href="/insights" class="link link-hover font-body">Articles</a>
		<a href="/services" class="link link-hover font-body">Contact</a>
	</nav>
	<nav class="md:col-start-5 md:justify-self-end">
		<h6 class="footer-title font-heading">Services</h6>
		<a href="/services" class="link link-hover font-body">Strategy Planning</a>
		<a href="/services" class="link link-hover font-body">Customer Experience Audit</a>
		<a href="/services" class="link link-hover font-body">Financial Forecast Review</a>
		<a href="/services" class="link link-hover font-body">Competitor Analysis</a>
	</nav>
</footer>
<footer class="footer px-4 md:px-10 py-4 border-t bg-primary text-white border-accent md:grid-cols-6">
	<aside class="grid mx-auto items-center grid-flow-col md:col-start-2 md:col-span-2">
		<img src={White} width=100 height=100 alt="Morningtide Logo" class="max-h-16 w-full pr-4" />
		<p class="font-body text-sm">Morningtide Consulting<br />© 2024 Morningtide Consulting</p>
	</aside>
	<nav class="place-self-center md:justify-self-end md:col-start-5">
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="View Stuart Robinson's LinkedIn Profile" >
				<LinkedinLogo class="text-white h-6 w-6" />
			</a>
			<a href="https://twitter.com/Morningtide_Go" aria-label="View Morningtide Consulting's Twitter Account" >
				<TwitterLogo class="text-white h-6 w-6" />
			</a>
			<a href="https://www.instagram.com/morningtide.consulting/" aria-label="View Morningtide Consulting's Instagram Feed" >
				<InstagramLogo class="text-white h-6 w-6" />
			</a>
		</div>
	</nav>
</footer>
