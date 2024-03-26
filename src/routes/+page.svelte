<script lang="ts">
    import Team from "$lib/images/business-team-collaborating_tiny.jpg";
</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="Morningtide Consulting is a specialist consultancy working with independent school Boards, Principals, and their teams to create compelling strategy.">
</svelte:head>

<div class="hero h-[720px]" style="background-image: url({Team});">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-left text-neutral-content">
        <div class="grid grid-cols-5">
            <div class="col-start-4 col-span-2 max-w-md">
                <div class="card backdrop-blur backdrop-brightness-50 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title text-accent text-2xl font-heading">Why is your school measuring performance?</h2>
                      <p class="font-body">Don't be afraid or tear out your hair; this might improve your engagement and staff commitment. It's the start of a brand-new school year, and having had the opportunity to relax and recharge - a couple of inspirational books from trending thought-leaders under your belt - leaders can now focus</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-outline btn-accent">Read More...</button>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
    </div>
</div>
<div class="flex justify-around bg-primary p-4">
    <div>
        <h3 class="h3 text-white opacity-60">Mon-Fri 8:00 - 18:00 (AEDT)</h3>
    </div>
    <div>
        <h3 class="h3 text-white opacity-60">Melbourne | Sydney | Brisbane | Adelaide | Perth</h3>
    </div>
    <div>
        <h3 class="h3 text-white opacity-60">info@morningtide.com.au</h3>
    </div>
</div>
<div class="text-center bg-accent p-6 space-y-4">
    <div class="col-start-2">
        <h2 class="h2 text-white text-4xl">Wondering How You Could Create<br>A Compelling School Strategy?</h2>
    </div>
    <div class="col-start-4">
        <button class="btn btn-outline btn-primary">Get Started</button>
    </div>
</div>
<div class="grid grid-cols-5 gap-4 py-12">
    <div class="col-span-3 col-start-2">
        <h2 class="h2 text-accent text-5xl">Ready to Craft a School Strategy?</h2>
    </div>
    <div class="col-span-2 col-start-2 row-start-2 space-y-2">
        <p>Many independent school leaders view school strategy in one of two ways. Either they are keen to get started but not not sure how, or past experiences have numbed the desire, and the pressure to deliver the school's strategic plan now evokes anxiety and stress.</p>
        <p>You are not alone.</p>
    </div>
    <div class="col-span-2 col-start-2 row-start-3 space-y-2">
        <h3 class="h3 text-accent text-4xl">How We Can Help</h3>
        <p>Morningtide Consulting can help you craft a compelling school strategy. We then provide you an unconventional framework to successfully implement it - while keeping your stakeholders engaged and committed.</p>
        <p>Take a look around our site and read some of our articles, service offerings, and recommendations.</p>
        <p>When you are ready, book an <a href="/" class="text-accent hover:text-primary">obligation-free consoltation.</a></p>
    </div>
    <div class="row-span-2 col-span-2 col-start-4 row-start-2 place-self-center">
        <img class="mask mask-parallelogram-3 w-72" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" alt="something" />
    </div>
</div>