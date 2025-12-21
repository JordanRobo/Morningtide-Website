<script lang="ts">
	import { subscribeSchema } from "$lib/schema";
	import { toast } from "svelte-sonner";
	import { Control, Description, Field, Fieldset, Label } from "formsnap";
	import { valibotClient } from "sveltekit-superforms/adapters";
	import { superForm } from "sveltekit-superforms";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let { data } = $props();
	let subscribed = $state(false);

	const isSubscribed = () => {
		if (localStorage.getItem("strategy-cheat-sheet-subscribed") === "true") {
			subscribed = true;
		}
	};

	// svelte-ignore state_referenced_locally
	const form = superForm(data.subscribeForm, {
		id: "strategy-cheat-sheet",
		customValidity: true,
		validators: valibotClient(subscribeSchema),
		onUpdated({ form }) {
			if (form.valid) {
				toast.success("Thank you for subscribing!");
				localStorage.setItem("strategy-cheat-sheet-subscribed", "true");
				subscribed = true;
			} else {
				toast.error("There was an error processing your request.");
			}
		},
	});
	const { form: formData, enhance } = form;

	onMount(() => {
		$formData.form_id = "strategy cheat sheet";
		isSubscribed();
	});

	const faqs = [
		{
			question: "What’s the biggest shift in school strategy I should be aware of right now?",
			answer: "The pivot from long-range plans to agile capability-building. Schools aren’t chasing five-year utopias anymore—they're focusing on being responsive, resilient, and ready to move quickly. Strategy is less about predicting the future and more about preparing for it.",
		},
		{
			question: "Do we really need a strategic plan if everything changes so fast?",
			answer: "Yes—but not the 40-page shelf-warmer you reviewed once and forgot. Modern strategy is about structured focus: clarifying your priorities, aligning your teams, and creating the conditions for confident decision-making. It's your school’s filter, not a crystal ball.",
		},
		{
			question: "How do we balance innovation with tradition?",
			answer: "Strategically. You don’t ditch the past—you reframe it. The best schools are drawing from their heritage while deliberately prototyping new models in small, low-risk ways. Think “tradition with traction” rather than “nostalgia with inertia.”",
		},
		{
			question: "What’s the most underrated strategic priority in schools right now?",
			answer: "Staff experience. Not just retention, but making your school a place where professionals thrive. In a tight talent market, your culture is a competitive advantage—and a key determinant of student success. Happy staff, better outcomes. Simple.",
		},
	];
</script>

<div class="hero h-[45vh] md:h-80 relative overflow-hidden">
	<div class="w-full h-full mask-l-from-0 mask-l-to-70% bg-[url(/images/uploads/about-1200w.webp)] bg-center"></div>
	<div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4 lg:justify-end relative">
		<div class="text-center lg:text-start p-8">
			<h1 class="text-3xl font-bold capitalize md:text-5xl text-primary">School strategy<br /> shouldn’t be your second job.</h1>
			<p class="py-2 text-md text-primary font-medium lg:max-w-lg">We help Independent School Principals get the clarity, alignment, and momentum they need—without months of frustration, committee churn, or consultant fluff.</p>
		</div>
	</div>
</div>

<main class="container flex flex-col max-w-5xl mx-auto my-8 space-y-8 p-4 sm:p-8">
	<section class="flex flex-col sm:flex-row gap-8 py-4">
		<div>
			<div class="card sm:w-96 bg-base-100 shadow-sm mx-auto">
				<div class="card-body">
					<h2 class="card-title text-accent">Download the 2025 Strategy Cheat Sheet for Independent Schools.</h2>
					<p class="text-sm">Learn how your strategy can improve your school</p>
					<div class="relative min-h-24 sm:min-h-20">
						{#if subscribed}
							<div class="absolute" transition:fade={{ duration: 400, delay: 600 }}>
								<div class="flex flex-col text-center space-y-2">
									<span class="font-bold">Thank you for subscribing! Click below to download your strategy cheat sheet.</span>
									<a href="/downloads/2025-strategy-cheat-sheet.pdf" download="2025-strategy-cheat-sheet.pdf" class="btn btn-sm btn-primary text-white no-underline"> Start Download </a>
								</div>
							</div>
						{:else}
							<form class="absolute" transition:fade={{ duration: 400 }} method="POST" action="/?/subscribe" use:enhance>
								<input type="text" name="form_id" class="hidden" bind:value={$formData.form_id} />
								<Fieldset class="fieldset" {form} name="email">
									<Control>
										{#snippet children({ props })}
											<div class="join w-full">
												<Label class="floating-label flex-1">
													<span>Email</span>
													<input class="input input-sm text-base-content validator" {...props} type="email" placeholder="your.email@mail.com" bind:value={$formData.email} />
												</Label>
												<button class="btn btn-sm btn-accent text-white join-item">Subscribe</button>
											</div>
										{/snippet}
									</Control>
									<Description class="max-w-80"
										>By clicking the "Subscribe" button, you are agreeing to our
										<button onclick={(event) => (event.preventDefault(), privacy_policy.showModal())} class="link link-accent">Privacy Policy.</button>
									</Description>
								</Fieldset>
							</form>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="w-fit space-y-4">
			<h3 class="text-2xl font-bold text-primary">Create a strategy that moves the dial in 2025</h3>
			<p>
				Why does strategy often fail in execution? The issue is rarely the strategy itself — more often, it’s the systems and structures that are not equipped to deliver it. The complexity of designing and implementing strategy
				remains one of the top six strategic risks facing independent schools today.
			</p>
			<p><span class="font-bold text-primary">Download the 2025 Strategy Cheat Sheet for Independent Schools</span> to help you identify areas where your school may not be aligned. You will discover:</p>
			<ul class="list-disc list-outside ml-4 pt-2">
				<li><span class="font-bold text-primary">Tips for crafting your strategy</span> built on data-informed best-practice</li>
				<li><span class="font-bold text-primary">How to drive execution</span> that invites staff and stakeholder engagement</li>
				<li><span class="font-bold text-primary">Why limiting your priorities</span> will ensure achievement of your vision</li>
			</ul>
		</div>
	</section>
	<span class="divider divider-accent w-40 mx-auto"></span>
	<section class="flex flex-col sm:flex-row gap-8">
		<div class="sm:w-2/3 space-y-4">
			<h2 class="text-3xl font-bold text-primary">The 2025 Strategy Cheat Sheet for Independent Schools</h2>
			<p>The Strategy Cheat Sheet is designed to do one thing: help you cut through the noise and make strategy doable.</p>
			<p>
				It breaks the process into five clear stages—Review, Inspire, Design, Goals, Execute—and gives you practical actions, checklists, and tools to move each one forward. Think of it as a strategic GPS: it tells you where you
				are, where you’re headed, and what you might be missing along the way.
			</p>
			<p>Even better? It’s built specifically for Independent Schools. No generic frameworks, no MBA jargon—just smart, structured prompts you can walk through with your leadership team tomorrow morning.</p>
			<p>If you’re tired of strategy being something that lives in a binder instead of the staffroom, this cheat sheet is your first step to changing that.</p>
		</div>
		<div class="sm:w-1/3 p-4">
			<img src="/images/uploads/about-1200w.webp" alt="Strategy Cheat Sheet" class="w-auto h-full object-cover rounded-br-[120px]" />
		</div>
	</section>
	<span class="divider divider-accent w-40 mx-auto"></span>
	<section class="flex flex-col sm:flex-row gap-8">
		<div class="sm:w-1/3 space-y-2">
			<h3 class="text-2xl font-bold">Top Strategy trends and priorities FAQ</h3>
		</div>
		<div class="sm:w-2/3">
			{#snippet FAQ(input: any, index: number)}
				<div class="collapse collapse-arrow border-b border-gray-300 group-last:border-white/30">
					<input type="checkbox" name="accordion-{index}" />
					<div class="collapse-title font-semibold flex items-center gap-2">
						{input.question}
					</div>
					<div class="collapse-content text-base-content">
						<p class="text-sm text-base-content/90">{input.answer}</p>
					</div>
				</div>
			{/snippet}
			{#each faqs as faq, index}
				{@render FAQ(faq, index)}
			{/each}
		</div>
	</section>
</main>
