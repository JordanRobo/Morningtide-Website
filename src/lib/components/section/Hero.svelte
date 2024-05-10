<script lang="ts">
    export let image: string;
    export let badge: string;
    export let heading: string;
    export let subheading: string;
</script>


<div class="hero h-96 rounded-br-[120px] md:rounded-br-[220px]" style="background-image: url({image});">
	<div class="hero-overlay bg-opacity-80 rounded-br-[120px] md:rounded-br-[220px]"></div>
	<div class="hero-content flex-col lg:flex-row-reverse lg:-ml-96">
    <div class="text-center lg:text-start">
      <span class="badge badge-outline badge-accent badge-lg">{badge}</span>
      <h1 class="text-3xl font-bold uppercase md:text-7xl text-accent">{heading}</h1>
      <p class="py-2 text-lg font-medium lg:max-w-lg text-white">{subheading}</p>
    </div>
  </div>
</div>