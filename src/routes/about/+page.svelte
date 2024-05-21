<script lang="ts">
	import { Header } from '$lib/components/ui/shared';
	import { about } from '$lib/data';
	import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { EnvelopeClosed, Home, InstagramLogo, LinkedinLogo, Mobile, TwitterLogo } from 'svelte-radix';
	import { Values } from '$lib/components/ui/about';

	export let form: ActionData;

	let showMessage = false;

	$: if (form?.success !== undefined) {
		showMessage = true;
		setTimeout(() => {
			showMessage = false;
		}, 5000); 
	};

</script>

<svelte:head>
	<title>About | Morningtide Consulting</title>
	<meta name="description" content={about.subheading} />
</svelte:head>

<Header header={about} />

<div class="flex flex-col max-w-screen-lg mx-auto p-4 gap-4">
		<div class="card w-2/3 bg-white shadow-xl mx-auto">
			<div class="card-body">
				<h1 class="card-title text-center text-2xl font-bold md:text-5xl md:text-left">Our Clients</h1>
				<p>Schools engage with us when they:</p>
				<ul class="list-disc list-inside">
					<li>Need help facilitating the creation of strategy by collaborating with stakeholders</li>
					<li>Want a successful implementation plan and framework</li>
					<li>Seek assistance to review their current strategy or execution</li>
					<li>Are keen to measure the success of their strategy and need an external audit</li>
				</ul>
			</div>
		</div>
		<div class="card w-2/3 bg-white shadow-xl mx-auto">
			<div class="card-body">
				<h1 class="card-title text-center text-2xl font-bold md:text-5xl md:text-left">Our Vision</h1>
				<p>To be the leading strategic advocate of schools across Australia.</p>
			</div>
		</div>
		<Values />
</div>

<section class="mt-20">
	<div class="flex w-full flex-col justify-center">
		<h1 class="text-center font-urbanist text-2xl font-bold md:text-5xl">Want to stay up to date?</h1>
		<span class="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl">Follow our socials or signup to our mailing list.</span>
	</div>
	<div class="container mx-auto px-6 py-10">
		<div class="lg:-mx-6 lg:flex lg:items-center">
			<div class="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
				<div class="mt-6 space-y-8 md:mt-8">
					<p class="-mx-2 flex items-start">
						<Home class="text-base-400 mx-2 h-6 w-6" />
						<span class="mx-2 w-72 truncate text-base-content">Kew, Melbourne VIC</span>
					</p>
					<p class="-mx-2 flex items-start">
						<Mobile class="text-base-400 mx-2 h-6 w-6" />
						<span class="mx-2 w-72 truncate text-base-content">0403 987 946</span>
					</p>
					<p class="-mx-2 flex items-start">
						<EnvelopeClosed class="text-base-400 mx-2 h-6 w-6" />
						<span class="mx-2 w-72 truncate text-base-content">info@morningtide.com.au</span>
					</p>
				</div>
				<div class="mt-6 w-80 md:mt-8">
					<h3 class="text-base-400">Follow us</h3>
					<div class="-mx-1.5 mt-4 flex">
						<a class="btn mx-1.5 rounded-full bg-base-100" href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="linkedin">
							<LinkedinLogo class="text-base-400 mx-2 h-6 w-6" />
						</a>
						<a class="btn mx-1.5 rounded-full bg-base-100" href="https://twitter.com/Morningtide_Go" aria-label="twitter">
							<TwitterLogo class="text-base-400 mx-2 h-6 w-6" />
						</a>
						<a class="btn mx-1.5 rounded-full bg-base-100" href="https://www.instagram.com/morningtide.consulting/" aria-label="instagram">
							<InstagramLogo class="text-base-400 mx-2 h-6 w-6" />
						</a>
					</div>
				</div>
			</div>
			<div class="card mt-8 lg:mx-6 lg:w-1/2">
				<div class="card-body bg-white mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl" >
					<h1 class="card-title">Subscribe for the latest updates and articles.</h1>
					<form method="POST" action="?/subscribe" use:enhance>
						<div class="space-y-1 w-full">
							<label for="name" class="label font-bold">Name</label>
							<input required type="text" name="name" placeholder="Enter your name" class="input w-full outline outline-base-content/5" />
							<label for="email" class="label font-bold">Email</label>
							<input required type="email" name="email" placeholder="Enter your email" class="input w-full outline outline-base-content/5" />
							<div class="col-span-2 flex justify-between items-center pt-3">
								<div>
									<span class="label-text">By submitting you confirm you have read<br>and accept the <button class="link link-accent" on:click|preventDefault={() => showModal('privacy_policy')}>Privacy Policy.</button></span>
								</div>
								<div>
									<button class="btn btn-outline btn-primary">Submit</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

{#if showMessage && form?.success === true}
	<div class="toast toast-center z-50">
		<div class="alert alert-success">
			<span>Welcome to the Morningtide insider!</span>
		</div>
	</div>
{:else if showMessage && form?.success === false}
	<div class="toast toast-center z-50">
		<div class="alert alert-error text-center">
			<span>Oh No, there was a problem, please try again.</span>
		</div>
	</div>
{/if}
