<script lang="ts">
	import { White } from '$lib/images/logo';
</script>

<div class="min-h-screen bg-stone-50">
	<nav class="navbar bg-primary md:px-8 relative z-50">
		<div class="flex-1 ml-2 p-2">
			<img
				src={White}
				alt="Morningtide Logo"
				class="max-h-10 md:max-h-20 max-w-48 object-contain"
			/>
		</div>
	</nav>

	<main class="container mx-auto">
		<slot />
	</main>
</div>
