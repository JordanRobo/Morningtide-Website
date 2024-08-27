<script lang="ts">
	import { White } from '$lib/images/logo';
</script>

<nav class="navbar bg-primary md:px-8 relative z-50">
	<div class="flex-1 ml-2 p-2">
		<img src={White} alt="Morningtide Logo" class="max-h-10 md:max-h-20 max-w-48 object-contain" />
	</div>
</nav>

<slot />
