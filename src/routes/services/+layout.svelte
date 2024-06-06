<script lang="ts">
	import { services } from '$lib/data';
	import type { ActionData } from './$types';
	import { Header } from '$lib/components/ui/shared';
    import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';

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
	<title>Services | Morningtide Consulting</title>
	<meta name="description" content={services.subheading} />
</svelte:head>

<Header header={services} />

<div class="container lg:max-w-3xl flex flex-col mx-auto py-8">
	<div class="relative h-[720px] overflow-hidden">
		<div class="absolute inset-0 overflow-hidden">
			<slot></slot>
		</div>
	</div>
</div>

<div class="bg-white -mb-8">
	<div class="container max-w-[760px] flex flex-col mx-auto mt-8">
		<div class="flex flex-col items-center justify-center p-4 mt-8">
			<h1 class="text-center text-2xl font-bold md:text-5xl">Ready to Begin?</h1>
			<span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Take the first step to discuss your strategy needs.</span>
		</div>
		<div class="flex flex-wrap justify-center gap-8 my-6">
			<form method="POST" action="?/submit" use:enhance>
				<div class="grid grid-cols-2 justify-stretch gap-2 p-2">
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
</div>