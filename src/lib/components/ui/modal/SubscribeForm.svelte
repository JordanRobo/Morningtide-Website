<script lang="ts">
    import { enhance } from '$app/forms';
	import { Cross1 } from "svelte-radix";
	
</script>

<dialog id="subscribe_form" class="modal">
	<div class="modal-box bg-primary text-white w-11/12 max-w-2xl p-8">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Cross1 class="h-4 w-4" /></button>
		</form>
		<div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
			<div class="pl-4">
				<h1 class="font-bold">Stay ahead of the game!</h1>
				<p class="py-4">Subscribe to our newsletter for exclusive updates and insights.</p>
			</div>
			<form method="POST" action="/about?/subscribe" use:enhance>
				<div class="space-y-1 w-full">
					<label for="name" class="label font-bold">Name</label>
					<input required id="name" type="text" placeholder="Enter your name" class="input w-full" />
					<label for="email" class="label font-bold">Email</label>
					<input required id="email" type="email" placeholder="Enter your email" class="input w-full" />
					<div class="flex justify-end pt-3">
						<button class="btn btn-accent">Subscribe</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</dialog>