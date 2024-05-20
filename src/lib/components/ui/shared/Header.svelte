<script lang="ts">
  export let header: { image: string, badge: string, heading: string, subheading: string };
</script>


<div class="hero h-96 rounded-br-[120px] md:rounded-br-[220px]" style="background-image: url({header.image});">
	<div class="hero-overlay bg-opacity-80 rounded-br-[120px] md:rounded-br-[220px]"></div>
	<div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end">
    <div class="text-center lg:text-start">
      <span class="badge badge-outline badge-accent badge-lg">{header.badge}</span>
      <h1 class="text-5xl font-bold uppercase md:text-7xl text-accent">{header.heading}</h1>
      <p class="py-2 text-lg font-medium lg:max-w-lg text-white">{header.subheading}</p>
    </div>
  </div>
</div>