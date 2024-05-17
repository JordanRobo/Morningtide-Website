<script>
  import { services } from "$lib/data";

</script>

<div id="services" class="mt-10 flex flex-col items-center justify-center md:mt-20">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center text-2xl font-bold md:text-5xl">Our Services</h1>
    <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Uncover new paths, explore opportunities and chart your success with us.</span>
  </div>
  <div class="container mt-10 grid gap-10 p-4 md:grid-cols-2">
    {#each services.service as item, index}
      <div
        class="cardmax-w-2xl shadow-md transition duration-300 hover:-translate-y-1"
      >
        <div class="card-body">
          <div
            class="h-16 w-16 rounded-full bg-gradient-to-r from-primary/100 to-primary/70"
          >
            <img class="p-4" src={item.icon} alt={item.title} />
          </div>
          <h2 class="card-title text-3xl font-bold text-accent">
            {item.title}
          </h2>
          <p class="text-md font-medium opacity-70">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
