<script lang="ts">
	import { AboutFeat, InsightsFeat, ServicesFeat } from "$lib/images/uploads";
</script>

<div class="bg-white">
	<div class="flex max-w-screen-lg mx-auto p-4">
		<div class="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-8 md:py-8 text-center lg:text-left">
			<div class="hidden lg:block">
				<img src={AboutFeat} alt="Morningtide Consulting Team" class="h-full object-cover rounded-tr-[120px]" width="100%" height="100%" />
			</div>
			<div class="hidden lg:block col-start-1 row-start-2">
				<img src={InsightsFeat} alt="Morningtide Consulting Team" class="h-full object-cover rounded-bl-[120px]" width="100%" height="100%" />
			</div>
			<div class="hidden lg:block col-start-2 row-start-2">
				<img src={ServicesFeat} alt="Morningtide Consulting Team" class="h-full object-cover rounded-tr-[120px]" width="100%" height="100%" />
			</div>
			<div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:ml-8">
				<h1 class="text-accent">Ready to Craft Your School Strategy?</h1>
				<p>
					Many independent school leaders view school strategy in one of two ways. Either they are keen
					to get started but not not sure how, or past experiences have numbed the desire, and the
					pressure to deliver the school's strategic plan now evokes anxiety and stress. <span class="font-bold">You are not alone.</span>
				</p>
			</div>
			<div class="lg:col-span-2 lg:row-start-2 lg:self-end lg:ml-6">
				<h2 class="text-accent">How We Can Help</h2>
				<p>
					Morningtide Consulting can help you craft a compelling school strategy. We then provide you an
					unconventional framework to successfully implement it - while keeping your stakeholders
					engaged and committed.
				</p>
				<p>
					Take a look around our site and read some of our articles, service offerings, and
					recommendations.
				</p>
				<p>When you are ready, book an <a href="/" class="link link-accent">obligation-free consoltation.</a></p>
			</div>
		</div>
	</div>
</div>