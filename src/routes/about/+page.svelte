<script lang="ts">
	import { SectionHero } from '$lib';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	let about ={
		"image": "https://source.unsplash.com/1600x900/?about",
		"badge":"Who we are",
		"heading":"About Us",
		"subheading":"Morningtide Consulting brings a fresh approach for Principals and their leadership teams. We help create compelling strategy and then continue the journey through its implementation phase."
	};

</script>

<svelte:head>
	<title>About | Morningtide Consulting</title>
	<meta
		name="description"
		content={about.subheading}
	/>
</svelte:head>

<SectionHero image={about.image} badge={about.badge} heading={about.heading} subheading={about.subheading} />

<div class="modal" role="dialog" id="privacy_modal">
	<div class="modal-box">
		<div class="my-4 mx-8 bg-stone-50">
			<article class="prose p-8">
				<h1>{data.privacyPolicy.title}</h1>
				{@html data.privacyPolicy.html}
			</article>
		</div>
		<div class="modal-action">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" class="btn btn-accent">Close</a>
		</div>
	</div>
</div>

<div class="flex flex-wrap justify-center gap-8 my-8">
	<form method="POST" action="?/submit" use:enhance>
		<div class="w-[820px] grid grid-cols-2 justify-stretch gap-2">
			<div>
				<input type="text" name="name" placeholder="Full Name..." class="input input-bordered w-full" />
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
				<input type="email" name="email" placeholder="Email Address..." class="input input-bordered w-full" />
			</div>
			<div class="col-span-2">
				<textarea name="message" placeholder="Message..." class="textarea textarea-bordered w-full" ></textarea>
			</div>
			<div class="col-span-2 flex justify-between items-center">
				<div>
					<span class="label-text"></span>By submitting you confirm you have read and accept the <a class="link link-accent" href="#privacy_modal">Privacy Policy.</a>
				</div>
				<div>
					<button class="btn">Submit</button>
				</div>
			</div>
		</div>
	</form>
</div>