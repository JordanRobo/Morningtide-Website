<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="modal" role="dialog" id="privacy_modal">
	<div class="modal-box">
		<div class="my-4 mx-8 bg-stone-50">
			<article class="prose p-8">
				<h1>{data.privacyPolicy.title}</h1>
				{@html data.privacyPolicy.html}
			</article>
		</div>
		<div class="modal-action">
			<a href="#" class="btn btn-accent">Close</a>
		</div>
	</div>
</div>

<div class="flex flex-wrap justify-center gap-8 my-8">
	<form method="POST" action="?/test" use:enhance>
		<div class="w-[820px] grid grid-cols-2 justify-stretch gap-2">
			<div>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Full Name..."
					class="input input-bordered w-full"
				/>
			</div>
			<div>
				<input
					type="text"
					id="school"
					name="school"
					placeholder="Name of School..."
					class="input input-bordered w-full"
				/>
			</div>
			<div>
				<select id="position" name="position" class="select select-bordered w-full">
					<option disabled selected>Position</option>
					<option>Principal</option>
					<option>Board Chair</option>
					<option>Business Manager</option>
					<option>Executive Assistant</option>
					<option>Other</option>
				</select>
			</div>
			<div>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email Address..."
					class="input input-bordered w-full"
				/>
			</div>
			<div class="col-span-2">
				<textarea
					id="message"
					name="message"
					placeholder="Message..."
					class="textarea textarea-bordered w-full"
				></textarea>
			</div>
			<div class="col-span-2 flex justify-between items-center">
				<div>
					<span class="label-text"
						>By submitting you confirm you have read and accept the <a
							class="link link-accent"
							href="#privacy_modal">Privacy Policy.</a
						></span
					>
				</div>
				<div>
					<button class="btn">Submit</button>
				</div>
			</div>
		</div>
	</form>
</div>
