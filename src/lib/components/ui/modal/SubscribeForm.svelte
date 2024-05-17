<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<dialog id="subscribe_form" class="modal">
	<div class="modal-box bg-primary text-white w-11/12 max-w-2xl p-8">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
			<div>
				<h1 class="font-bold">Leaving so soon?</h1>
				<p class="py-4">Don't forget to subscribe to our newsletter to keep in the loop.</p>
			</div>
			<form method="POST" action="?/subscribe" use:enhance>
				<div class="space-y-1 w-full">
					<label for="name" class="label font-bold">Name</label>
					<input required type="text" name="name" placeholder="Enter your name" class="input w-full" />
					<label for="email" class="label font-bold">Email</label>
					<input required type="email" name="email" placeholder="Enter your email" class="input w-full" />
					<div class="flex justify-end pt-3">
						<button class="btn btn-accent">Subscribe</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</dialog>