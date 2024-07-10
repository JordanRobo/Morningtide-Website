<script lang="ts">
  import type { ImageSet } from '$lib/images/uploads'; 
  
  export let header: {
    image: ImageSet,
    badge: string,
    heading: string,
    subheading: string
  };
</script>

<div class="hero h-96 rounded-br-[120px] md:rounded-br-[220px] relative overflow-hidden">
  <picture class="absolute inset-0 w-full h-full">
    <source
      type="image/avif"
      srcset="{header.image.avif['300w']} 300w, {header.image.avif['600w']} 600w, {header.image.avif['1200w']} 1200w"
      sizes="100vw"
    />
    <source
      type="image/webp"
      srcset="{header.image.webp['300w']} 300w, {header.image.webp['600w']} 600w, {header.image.webp['1200w']} 1200w"
      sizes="100vw"
    />
    <img
      src={header.image.webp['1200w']}
      alt="Header background"
      class="w-full h-full object-cover"
      loading="eager"
      decoding="async"
    />
  </picture>
  <div class="hero-overlay bg-opacity-80 absolute inset-0 rounded-br-[120px] md:rounded-br-[220px]"></div>
  <div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end relative z-10">
    <div class="text-center lg:text-start">
      <span class="badge badge-outline badge-accent badge-lg">{header.badge}</span>
      <h1 class="text-5xl font-bold uppercase md:text-7xl text-accent">{header.heading}</h1>
      <p class="py-2 text-lg font-medium lg:max-w-lg text-white">{header.subheading}</p>
    </div>
  </div>
</div>