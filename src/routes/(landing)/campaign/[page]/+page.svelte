<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { writable } from 'svelte/store';

	const form_completed = writable(false);

	let email: string = '';

	export let data: PageData;

	$: ({ page } = data);

	function form_submit() {
		$form_completed = !$form_completed;
	}
</script>

<main class="container mx-auto">
	{#if $form_completed}
		<div class="p-4 space-y-8">
			<div class="mt-4 relative overflow-hidden w-full aspect-video">
				<iframe
					class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<span class="badge badge-accent badge-lg">Tag</span>
				</div>
				<div>
					<h1 class="text-6xl font-bold">Video Title</h1>
					<h2 class="text-4xl">Sub Title</h2>
				</div>
			</div>
			<div class="card bg-primary border flex flex-col min-h-72 w-2/3 p-4">
				<div class="card-body">
					<hr class="border-accent" />
					<div class="prose max-w-full text-white">
						{@html page.html}
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-5 gap-4 p-4">
			<div class="col-span-3 w-full space-y-4">
				<div class="p-4">
					<img
						src={page.feature_image}
						alt={page.title}
						class="rounded-bl-[120px] md:rounded-bl-[220px]"
					/>
				</div>
				<div class="card bg-white border flex flex-col min-h-72 p-4">
					<div class="card-body space-y-4">
						<h1 class="text-5xl font-bold text-accent">{page.title}</h1>
						<hr class="border-accent" />
						<div class="prose max-w-full">
							{@html page.html}
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-2">
				<div class="card bg-primary p-4 mt-4">
					<div class="card-body space-y-4">
						<div class="card-title">
							<h2 class="text-4xl text-white">Enter Details to View Video</h2>
						</div>
						<form method="POST" action="/" use:enhance>
							<div class="grid justify-items-stretch space-y-8">
								<label class="input input-bordered flex items-center gap-2">
									Email
									<input
										type="email"
										class="grow"
										placeholder="john.doe@email.com"
										bind:value={email}
									/>
								</label>
								<button
									class="btn btn-outline hover:bg-accent text-white w-1/3 justify-self-end"
									on:click|preventDefault={form_submit}>Next</button
								>
							</div>
							<div class="grid justify-items-stretch space-y-8">
								<label class="input input-bordered flex items-center gap-2">
									First Name
									<input type="text" class="grow" placeholder="John" />
								</label>
								<label class="input input-bordered flex items-center gap-2">
									Last Name
									<input type="text" class="grow" placeholder="Doe" />
								</label>
								<label class="input input-bordered flex items-center gap-2">
									Position
									<select name="position" class="select w-full">
										<option disabled selected></option>
										<option>Principal</option>
										<option>Board Chair</option>
										<option>Business Manager</option>
										<option>Executive Assistant</option>
										<option>Other</option>
									</select>
								</label>
								<label class="input input-bordered flex items-center gap-2">
									School
									<input type="text" class="grow" />
								</label>
								<button
									class="btn btn-outline hover:bg-accent text-white w-1/3 justify-self-end"
									on:click|preventDefault={form_submit}>Next</button
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
