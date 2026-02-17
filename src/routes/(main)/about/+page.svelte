<script lang="ts">
    import { schemaCrumb } from "$lib/data/jsonLd";
    import {
        EnvelopeClosed,
        InstagramLogo,
        LinkedinLogo,
        Mobile,
        TwitterLogo,
    } from "svelte-radix";

    const values = [
        {
            title: "Respectful",
            icon: "/images/icons/respect.png",
            body: "We believe in the genius of others and that we each have a part to play.",
        },
        {
            title: "Inquisitive",
            icon: "/images/icons/inquisitive.png",
            body: "We believe that the status quo should be continually probed and challenged.",
        },
        {
            title: "Best-practice",
            icon: "/images/icons/best-practice.png",
            body: "We believe that change should always be informed by data, and continual assessment.",
        },
        {
            title: "Innovative",
            icon: "/images/icons/innovate.png",
            body: "We believe that today's solutions become tomorrow's problems. We need to remain acutely aware of our environment as we innovate.",
        },
        {
            title: "Practical",
            icon: "/images/icons/practical.png",
            body: "We believe that solutions must be practical.  Every problem requires the right tool for its solution.",
        },
    ];
</script>

<svelte:head>
    <title
        >About Morningtide Consulting | School Strategy Experts | Australia</title
    >
    <meta
        name="description"
        content="Learn about Morningtide Consulting and our approach to helping independent school leaders craft and implement compelling strategic plans across Australia."
    />
    {@html `<script type="application/ld+json">${JSON.stringify(schemaCrumb)}</script>`}
</svelte:head>

<div class="flex flex-col md:flex-row max-w-5xl mx-auto gap-4 my-12">
    <div class="w-full md:w-1/2">
        <div class="space-y-1 p-4">
            <h2 class="text-3xl text-center md:text-left font-bold md:text-4xl">
                Our Legacy
            </h2>
            <span class="divider mx-auto md:mx-0 divider-accent w-48"></span>
            <p class="text-center md:text-left">
                Morningtide is a specialist consultancy working with independent
                school Boards, Principals, and their teams to create compelling
                strategy. We are dedicated to ensuring the success of your
                strategic execution, and our goal is to establish a sustained
                culture of strategic planning within your school long after our
                job is complete.
            </p>
        </div>
    </div>
    <div class="w-full md:w-1/2">
        <div class="space-y-1 p-4">
            <h2 class="text-3xl text-center md:text-left font-bold md:text-4xl">
                Our Clients
            </h2>
            <span class="divider mx-auto md:mx-0 divider-accent w-48"></span>
            <p class="text-center md:text-left">
                Schools engage with us when they:
            </p>
            <ul class="list-disc list-outside ml-4 pt-2">
                <li>
                    Need help facilitating the creation of strategy by
                    collaborating with stakeholders
                </li>
                <li>Want a successful implementation plan and framework</li>
                <li>
                    Seek assistance to review their current strategy or
                    execution
                </li>
                <li>
                    Are keen to measure the success of their strategy and need
                    an external audit
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="bg-linear-to-br from-primary to-primary/80 text-white">
    <div class="max-w-5xl mx-auto p-4 gap-4 py-8">
        <div class="flex flex-col items-center">
            <h1 class="text-center text-3xl font-bold md:text-4xl">
                Our Values
            </h1>
            <span class="divider divider-accent w-48 mx-auto"></span>
        </div>
        <div class="flex flex-wrap">
            {#each values as value}
                <div class="text-center md:text-left md:w-1/3 p-4 space-y-1">
                    <img
                        src={value.icon}
                        alt="Icon"
                        class="h-10 w-10 mx-auto md:mx-0"
                    />
                    <h4 class="text-2xl font-bold">{value.title}</h4>
                    <p>{value.body}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<div id="contact" class="flex flex-col max-w-3xl mx-auto p-4 gap-4 my-12">
    <div class="flex flex-col items-center my-2">
        <h2 class="text-center text-3xl font-bold md:text-4xl">Our Founder</h2>
        <span class="divider divider-accent w-48 mx-auto"></span>
    </div>
    <div class="flex flex-col items-center text-center gap-4">
        <div
            class="h-52 w-52 rounded-br-[96px] rounded-lg overflow-hidden shadow-primary/80 shadow-md"
        >
            <img
                src="/images/uploads/Portrait_gradient-600w.webp"
                alt="Stuart Robinson Headshot"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
            />
        </div>
        <h3 class="font-bold text-3xl">Stuart Robinson</h3>
        <p>
            Founder, Stuart Robinson, has more than 25 years managing the
            business of schools. Equipped with his MBA (Leadership), a Bachelor
            of Business (Accounting and Marketing), and as a graduate of the
            Australian Institute of Company Directors, Stuart is highly capable
            and experienced to help you set your school's strategy.
        </p>
        <div class="card bg-primary text-white shadow-xl mt-6">
            <div class="card-body">
                <div
                    class="flex flex-col justify-center lg:flex-row lg:justify-evenly gap-4"
                >
                    <p class="flex items-start justify-center">
                        <EnvelopeClosed class="text-base-400 mx-2 h-6 w-6" />
                        <span class="mx-2 truncate font-bold"
                            >info@morningtide.com.au</span
                        >
                    </p>
                    <p class="flex items-start justify-center">
                        <Mobile class="text-base-400 mx-2 h-6 w-6" />
                        <span class="mx-2 truncate font-bold">0403 987 946</span
                        >
                    </p>
                    <div class="flex justify-center mt-2 lg:mt-0">
                        <a
                            class="mx-1.5"
                            href="https://www.linkedin.com/in/stuart-robinson-mba/"
                            aria-label="LinkedIn"
                        >
                            <LinkedinLogo class="text-white mx-2 h-6 w-6" />
                        </a>
                        <a
                            class="mx-1.5"
                            href="https://twitter.com/Morningtide_Go"
                            aria-label="Twitter"
                        >
                            <TwitterLogo class="text-white mx-2 h-6 w-6" />
                        </a>
                        <a
                            class="mx-1.5"
                            href="https://www.instagram.com/morningtide.consulting/"
                            aria-label="Instagram"
                        >
                            <InstagramLogo class="text-white mx-2 h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
