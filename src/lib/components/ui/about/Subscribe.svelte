<script lang="ts">
	import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';
	import { Newsletter } from '$lib/images/uploads';
</script>

<div class="mt-20">
	<div class="container mx-auto px-6 py-10">
		<div class="lg:-mx-6 lg:flex lg:items-center">
			<div class="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
				<div class="mockup-phone">
					<div class="camera"></div> 
					<div class="display">
						<div class="artboard artboard-demo phone-1 bg-[#e3ecf0]"><img src={Newsletter} alt="Newsletter Preview" class="object-cover mt-12"></div>
					</div>
				</div>
			</div>
			<div class="mt-8 lg:mx-6 lg:w-1/2">
				<div class="text-center mb-8">
					<h1 class="text-center text-2xl font-bold md:text-5xl">Want to stay up to date?</h1>
					<p class="text-lg mt-2">Join our mailing list and be the first to receive our exclusive insights.</p>
					<span class="divider divider-accent w-40 mx-auto"></span> 
				</div>
				<div class="card">
					<div class="card-body bg-white mx-auto w-full overflow-hidden rounded-lg px-8 py-6 shadow-xl outline outline-base-content/5 lg:max-w-xl" >
						<form method="POST" action="/about?/subscribe" use:enhance>
							<div class="space-y-1 w-full">
								<label for="name" class="label font-bold">Name</label>
								<input required type="text" name="name" placeholder="Enter your name" class="input w-full outline outline-base-content/5" />
								<label for="email" class="label font-bold">Email</label>
								<input required type="email" name="email" placeholder="Enter your email" class="input w-full outline outline-base-content/5" />
								<div class="col-span-2 flex justify-between items-center pt-3">
									<div>
										<span class="label-text">By submitting you confirm you have read<br>and accept the <button class="link link-accent" on:click|preventDefault={() => showModal('privacy_policy')}>Privacy Policy.</button></span>
									</div>
									<div>
										<button class="btn btn-outline btn-primary">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>