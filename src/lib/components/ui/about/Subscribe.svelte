<script lang="ts">
	import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';
	import { Newsletter } from '$lib/images/uploads';
</script>

<div class="mt-20">
	<div class="container mx-auto px-6 py-10">
		<div class="lg:flex lg:items-center lg:gap-12">
			<div class="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center">
				<div class="mockup-phone">
					<div class="camera"></div> 
					<div class="display">
						<div class="artboard artboard-demo phone-1 bg-[#e3ecf0] relative overflow-hidden">
							<picture class="absolute inset-0 w-full h-full">
								<source
									type="image/avif"
									srcset="{Newsletter.avif['300w']} 300w, {Newsletter.avif['600w']} 600w, {Newsletter.avif['1200w']} 1200w"
									sizes="320px"
								/>
								<source
									type="image/webp"
									srcset="{Newsletter.webp['300w']} 300w, {Newsletter.webp['600w']} 600w, {Newsletter.webp['1200w']} 1200w"
									sizes="320px"
								/>
								<img
									src={Newsletter.webp['600w']}
									alt="Newsletter Preview"
									class="w-full h-full object-cover object-center"
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<div class="text-center mb-8">
					<h2 class="text-center text-2xl font-bold md:text-5xl">Want to stay up to date?</h2>
					<p class="text-lg mt-2">Join our mailing list and be the first to receive our exclusive insights.</p>
					<span class="divider divider-accent w-40 mx-auto"></span> 
				</div>
				<div class="card">
					<div class="card-body bg-white mx-auto w-full overflow-hidden rounded-lg px-8 py-6 shadow-xl outline outline-base-content/5" >
						<form method="POST" action="/about?/subscribe" use:enhance>
							<div class="space-y-4 w-full">
								<div>
									<label for="name" class="label font-bold">Name</label>
									<input required type="text" id="name" name="name" placeholder="Enter your name" class="input input-bordered w-full" />
								</div>
								<div>
									<label for="email" class="label font-bold">Email</label>
									<input required type="email" id="email" name="email" placeholder="Enter your email" class="input input-bordered w-full" />
								</div>
								<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
									<div class="text-sm">
										<span>By submitting you confirm you have read and accept the </span>
										<button type="button" class="link link-accent" on:click|preventDefault={() => showModal('privacy_policy')}>Privacy Policy.</button>
									</div>
									<button type="submit" class="btn btn-primary w-full sm:w-auto">Subscribe</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>