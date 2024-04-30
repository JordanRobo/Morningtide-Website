<script lang="ts">
    import { drawer } from "$lib/stores";
</script>

<p>Drawer is open: {$drawer}</p>
<input type="checkbox" bind:checked={$drawer} />