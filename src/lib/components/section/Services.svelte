<script>
  import { Strategy, Analysis, Customer, Financial } from "$lib/images";

  const services = [
    {
      name: "Strategy Planning",
      icon: Strategy,
      description:
      "The world is changing at a rapidly, dynamic pace and it's more complex than ever. So, strategy planning has to become more fluid and continuous to keep up."
    },
    {
      name: "Competitor Analysis",
      icon: Analysis,
      description:
        "Conducting analysis into your competitor schools sometimes illuminates opportunities often overlooked. Morningtide Consulting offers research capabilities that provide insight into where your school fits in the current demographic environment."
    },
    {
      name: "Financial Forecast Review",
      icon: Financial,
      description:
        "Your 3-5 year financial forecast is the pinnacle document to execute your strategy. It dictates which resources will be prioritised. Morningtide Consulting can review the assumptions and calculations to ensure that it mirrors your strategic intent.",
    },
    {
      name: "Customer Experience Audit",
      icon: Customer,
      description:
        "Word of mouth is your best marketing tool, closely followed by customer service. Every employee has a part to play. Morningtide Consulting can audit your stakeholder engagement to identify customer experience (CX) opportunities.",
    }
  ];
</script>

<div id="services" class="mt-10 flex flex-col items-center justify-center md:mt-20">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center text-2xl font-bold md:text-5xl">Our Services</h1>
    <span class="text-md mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">Uncover new paths, explore opportunities and chart your success with us.</span>
  </div>
  <div class="container mt-10 grid gap-10 p-4 md:grid-cols-2">
    {#each services as item, index}
      <div
        class="cardmax-w-2xl shadow-md transition duration-300 hover:-translate-y-1"
      >
        <div class="card-body">
          <div
            class="h-16 w-16 rounded-full bg-gradient-to-r from-primary/100 to-primary/70"
          >
            <img class="p-4" src={item.icon} alt={item.name} />
          </div>
          <h2 class="card-title text-3xl font-bold text-accent">
            {item.name}
          </h2>
          <p class="text-md font-medium opacity-70">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
