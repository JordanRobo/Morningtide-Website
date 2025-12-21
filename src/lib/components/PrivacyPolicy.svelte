<script lang="ts">
	export let data: { title: string; html: string };
</script>

<dialog id="privacy_policy" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box max-w-xl! relative">
		<div class="bg-stone-50 h-[70vh] overflow-y-auto p-6">
			<article class="prose">
				<h1>{data.title}</h1>
				{@html data.html}
			</article>
		</div>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn btn-accent text-white">Close</button>
			</form>
		</div>
	</div>
</dialog>

<style>
	.modal-box {
		max-height: 90vh;
	}
</style>
