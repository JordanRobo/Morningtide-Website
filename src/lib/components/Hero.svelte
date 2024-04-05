<script lang="ts">
    import Team from "$lib/images/business-team-collaborating_tiny.jpg";

    export let title: string;
    export let subtitle: string;
    export let click: () => void;
</script>

<div class="hero h-[720px]" style="background-image: url({Team});">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-left text-neutral-content">
        <div class="grid md:grid-cols-5">
            <div class="md:col-start-4 md:col-span-2 max-w-md">
                <div class="card backdrop-blur backdrop-brightness-50 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-accent">{title}</h2>
                        <p>{subtitle}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline btn-accent" on:click={click}>Read More...</button>
                        </div>  
                    </div>
                  </div>
              </div>
        </div>
    </div>
</div>

