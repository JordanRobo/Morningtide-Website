<script lang="ts">
    import { goto } from '$app/navigation';

    export let title: string;
    export let custom_excerpt: string;
    export let image: string;
    export let slug: string;
</script>


<div class="card lg:card-side bg-white shadow-xl">
    <figure class="lg:w-1/2 max-h-[220px] lg:max-h-[300px]"><img class="object-cover" src={image} alt={title}/></figure>
    <div class="card-body lg:w-1/2">
      <h2 class="card-title">{title}</h2>
      <p>{custom_excerpt}</p>
      <div class="card-actions justify-end">
        <button on:click={() => goto("/insights/" + slug)} class="btn btn-primary">Read more</button>
      </div>
    </div>
</div>