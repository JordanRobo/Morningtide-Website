<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	import '@mux/mux-player';
	import { onMount } from 'svelte';

	export let data: PageData;
	export let form: ActionData;

	$: ({ page, formCompleted } = data);

	let emailCheck: 'not_checked' | 'match' | 'no_match' = 'not_checked';
	let showForm = false;
	let email = '';
	let muxPlayer: HTMLElement;

	function timeToSeconds(time: string): number {
		const [hours, minutes, seconds] = time.split(':').map(Number);
		return hours * 3600 + minutes * 60 + seconds;
	}

	function addChaptersToPlayer() {
		if (!page?.chapters || !muxPlayer) return;

		try {
			const chapters = Array.isArray(page.chapters) ? page.chapters : [page.chapters];

			const formattedChapters = chapters.map((chapter) => ({
				startTime: timeToSeconds(chapter.start),
				value: chapter.title
			}));

			muxPlayer.addChapters(formattedChapters);
		} catch (error) {
			console.error('Error adding chapters:', error);
		}
	}

	onMount(() => {
		if (muxPlayer) {
			muxPlayer.addEventListener(
				'loadedmetadata',
				() => {
					addChaptersToPlayer();
				},
				{ once: true }
			);
		}
	});

	$: {
		if (page && muxPlayer) {
			addChaptersToPlayer();
		}
	}

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

{#if formCompleted}
	<!-- Video Component -->
	<div class="mx-auto p-2 md:p-4 space-y-6 w-5/6">
		<div class="overflow-hidden">
			<mux-player
				bind:this={muxPlayer}
				class="w-full"
				playback-id={page?.video_id}
				accent-color="#262262"
				metadata-video-title={page?.video_title}
			/>
		</div>
		<div class="flex flex-row">
			<div class="mx-4 space-y-2">
				<h1 class="text-4xl md:text-5xl font-bold">{page?.video_title}</h1>
				<h2 class="text-2xl md:text-3xl">
					{page?.video_sub_title}
				</h2>
				<span class="badge badge-accent badge-lg">{page?.tag}</span>
			</div>
		</div>
		<div class="border flex flex-col md:w-2/3 p-4 shadow-md bg-white">
			<div class="card-body">
				<hr class="border-accent" />
				<div class="prose max-w-full">
					<!-- eslint-disable-next-line -->
					{@html page?.page_2}
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Default page layout -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 p-2">
		<div class="md:col-span-3 w-full space-y-4">
			<div class="md:p-4">
				<img
					src="https://db.morningtide.com.au/api/files/{page?.collectionId}/{page?.id}/{page?.feature_image}?token="
					alt={page?.page_title}
					class="rounded-bl-[120px] md:rounded-bl-[220px]"
				/>
			</div>
			<div class="card bg-white border flex flex-col min-h-72 p-4 shadow-md">
				<div class="card-body space-y-4">
					<h1 class="text-5xl font-bold text-accent">{page?.page_title}</h1>
					<hr class="border-accent" />
					<div class="prose max-w-full">
						<!-- eslint-disable-next-line -->
						{@html page?.page_1}
					</div>
				</div>
			</div>
		</div>
		<div class="md:col-span-2 p-2">
			<div class="card bg-primary p-4 mt-4">
				<div class="card-body space-y-4">
					<div class="card-title">
						<h2 class="text-4xl text-white">Register to Watch Now</h2>
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
								<input hidden type="text" value={page?.title} name="campaign_id" />
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
