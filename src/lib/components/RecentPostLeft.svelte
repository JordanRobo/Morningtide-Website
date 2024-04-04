<script lang="ts">
    export let image: string;
    export let title: string;
    export let excerpt: string;
    export let click: () => void;
</script>

<div class="hero min-h-[360px]">
    <div class="hero-content flex-col lg:flex-row">
      <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="Something" />
      <div>
        <h1 class="h1 text-4xl font-bold text-accent">{title}</h1>
        <p class="py-6">{excerpt}</p>
        <button on:click={() => {click}} class="btn btn-primary">Read more</button>
      </div>
    </div>
  </div>