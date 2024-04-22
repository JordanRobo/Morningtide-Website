<script lang="ts">
	import logo from '$lib/images/MC-Logo-2020-FC_CMYK.png';
</script>

<div class="navbar bg-base-100 md:px-8">
	<div class="flex-1">
		<a href="/"
			><img
				src={logo}
				alt="Morningtide Logo"
				class="max-h-16 md:max-h-24 min-w-24 object-contain"
			/></a
		>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 hidden md:flex">
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<a role="button" class="text-primary" href="/insights">Insights</a>
					<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href="/insights">View All</a></li>
						<div class="divider"></div> 
						<li><a href="/insights">Change Management</a></li>
						<li><a href="/insights">Innovation</a></li>
						<li><a href="/insights">Leadership Development</a></li>
						<li><a href="/insights">Learning</a></li>
						<li><a href="/insights">Organisational Culture</a></li>
						<li><a href="/insights">People</a></li>
						<li><a href="/insights">Recruitment</a></li>
						<li><a href="/insights">Strategy</a></li>
					</ul>
				</div>
			</li>
			<li>
				<div class="dropdown dropdown-bottom dropdown-hover dropdown-end">
					<a role="button" class="text-primary" href="/services">Services</a>
					<ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href="/services/competitor-analysis">Competitor Analysis</a></li>
						<li><a href="/services/customer-experience-audit">Customer Experience Audit</a></li>
						<li><a href="/services/financial-forecast-review">Financial Forecast Review</a></li>
						<li><a href="/services/strategy-planning">Strategy Planning</a></li>
					</ul>
				</div>
			</li>
			<li class="text-primary"><a href="/about">About</a></li>
			<li class="text-primary"><a href="https://courses.morningtide.com.au/">Courses</a></li>
			<li></li>
		</ul>
		<button class="btn btn-square btn-ghost block md:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</button>
	</div>
</div>
