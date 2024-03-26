<script lang="ts">
    import { formatMarkdown } from "$lib";
    export let data;
</script>

<div class="flex justify-center bg-stone-50">
    <article class="prose my-8">
        {@html formatMarkdown(data.post)}
    </article>
</div>