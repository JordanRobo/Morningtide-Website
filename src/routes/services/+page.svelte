<script lang="ts">
	import { Services, SectionHero, servicesPage } from '$lib';
	import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	let successMessage = '';
	let errorMessage = '';

	async function handleSubmit(event: any) {
		event.preventDefault();
		try {
			successMessage = 'Message sent successfully.';
			setTimeout(() => successMessage = '', 3000);
		} catch (error) {
			errorMessage = 'An error occurred.';
			setTimeout(() => errorMessage = '', 3000);
		}
	}
</script>

<svelte:head>
	<title>Services | Morningtide Consulting</title>
	<meta name="description" content={servicesPage.subheading} />
</svelte:head>

<SectionHero image={servicesPage.image} badge={servicesPage.badge} heading={servicesPage.heading} subheading={servicesPage.subheading} />

<div class="container max-w-[760px] flex flex-col mx-auto bg-white mt-8 pb-4">
	<Services />
</div>

<div class="container max-w-[760px] flex flex-col mx-auto bg-white mt-8">
	<div class="flex flex-col items-center justify-center p-4 mt-8">
		<h1 class="text-center text-2xl font-bold md:text-5xl">Ready to Begin?</h1>
		<span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Take the first step to discuss your strategy needs.</span>
	</div>
	<div class="flex flex-wrap justify-center gap-8 my-8">
		<form method="POST" action="?/submit" on:submit={handleSubmit} use:enhance>
			<div class="grid grid-cols-2 justify-stretch gap-2">
				<div>
					<input required type="text" name="name" placeholder="Full Name..." class="input input-bordered w-full" />
				</div>
				<div>
					<input type="text" name="school" placeholder="Name of School..." class="input input-bordered w-full" />
				</div>
				<div>
					<select name="position" class="select select-bordered w-full" >
						<option disabled selected>Position</option>
						<option>Principal</option>
						<option>Board Chair</option>
						<option>Business Manager</option>
						<option>Executive Assistant</option>
						<option>Other</option>
					</select>
				</div>
				<div>
					<input required type="email" name="email" placeholder="Email Address..." class="input input-bordered w-full" />
				</div>
				<div class="col-span-2">
					<textarea name="message" placeholder="Message..." class="textarea textarea-bordered w-full" ></textarea>
				</div>
				<div class="col-span-2 flex justify-between items-center">
					<div>
						<span class="label-text">By submitting you confirm you have read<br>and accept the <button class="link link-accent" on:click|preventDefault={() => showModal('privacy_policy')}>Privacy Policy.</button></span>
					</div>
					<div>
						<button class="btn">Submit</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

{#if successMessage}
	<div class="toast toast-center">
		<div class="alert alert-success">
			<span>{successMessage}</span>
		</div>
	</div>
{/if}

{#if errorMessage}
	<div class="toast toast-center">
		<div class="alert alert-success">
			<span>{errorMessage}</span>
		</div>
	</div>
{/if}

<dialog id="privacy_policy" class="modal">
	<div class="modal-box w-2/3 max-w-4xl p-12 h-3/4">
		<div class="bg-stone-50 overflow-y-scroll">
			<article class="flex flex-col mx-auto prose py-12">
				<h1>{data.privacyPolicy.title}</h1>
				{@html data.privacyPolicy.html}
			</article>
		</div>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn btn-accent">Close</button>
			</form>
		</div>
	</div>
</dialog>
