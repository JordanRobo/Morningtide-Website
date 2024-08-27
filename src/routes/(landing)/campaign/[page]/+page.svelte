<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	import Video from '$lib/components/ui/campaigns/Video.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: ({ page, formCompleted } = data);

	let emailCheck: 'not_checked' | 'match' | 'no_match' = 'not_checked';
	let showForm = false;
	let email = '';

	$: {
		if (form?.success) {
			if (form.exists !== undefined) {
				emailCheck = form.exists ? 'match' : 'no_match';
				if (!form.exists) {
					showForm = true;
				}
			}
		}
	}
</script>

<main class="container mx-auto">
	{#if formCompleted}
		<!-- Video Component -->
		<Video html={page.html} />
	{:else}
		<!-- Default page layout -->
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 p-2">
			<div class="md:col-span-3 w-full space-y-4">
				<div class="md:p-4">
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
							<!-- eslint-disable svelte/no-at-html-tags -->
							{@html page.html}
							<!--eslint-enable-->
						</div>
					</div>
				</div>
			</div>
			<div class="md:col-span-2 p-2">
				<div class="card bg-primary p-4 mt-4">
					<div class="card-body space-y-4">
						<div class="card-title">
							<h2 class="text-4xl text-white">Enter Details to View Video</h2>
						</div>
						{#if emailCheck === 'not_checked'}
							<!-- Form Part 1 -->
							<form method="POST" action="?/check_email" use:enhance>
								<div class="grid justify-items-stretch space-y-8">
									<label class="input input-bordered flex items-center gap-2">
										Email
										<input
											type="email"
											class="grow"
											placeholder="john.doe@email.com"
											name="email"
											bind:value={email}
											required
										/>
									</label>
									<button
										type="submit"
										class="btn btn-outline hover:bg-accent text-white w-1/3 justify-self-end"
									>
										Next
									</button>
								</div>
							</form>
						{:else if emailCheck === 'no_match' && showForm}
							<!-- Form Part 2 -->
							<form method="POST" action="?/submit" use:enhance>
								<div class="grid justify-items-stretch space-y-8">
									<label class="input input-bordered flex items-center gap-2">
										First Name
										<input type="text" class="grow" placeholder="John" name="first_name" required />
									</label>
									<label class="input input-bordered flex items-center gap-2">
										Last Name
										<input type="text" class="grow" placeholder="Doe" name="last_name" required />
									</label>
									<label class="input input-bordered flex items-center gap-2">
										Position
										<select name="position" class="select w-full" required>
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
										<input type="text" class="grow" name="school" required />
									</label>
									<input hidden type="email" bind:value={email} name="email" />
									<input hidden type="text" value={page.title} name="campaign_id" />
									<button class="btn btn-outline hover:bg-accent text-white w-1/3 justify-self-end">
										Submit
									</button>
								</div>
							</form>
						{:else}
							<!-- Show loading or error state -->
							<p>Processing...</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
