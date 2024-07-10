<script lang="ts">
    import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';

</script>

<div class="card my-24 p-2">
    <div class="card-body bg-primary mx-auto w-full overflow-hidden rounded-lg px-8 py-6 shadow-xl outline outline-base-content/5 lg:max-w-xl text-white" >
        <h1 class="text-accent text-4xl font-bold md:text-5xl">Coming Soon!</h1>
        <p>We're currently upgrading our courses user experience.</p>
        <p>We hope that this will create a more seamless and enjoyable experience for all.</p>

        <p>Thank you for your patience.</p>

        <p>In the meantime why not learn something from one of our Insights or subscribe below to be the first to here about our new courses experience.</p>
    </div>
</div>


<div class="bg-white -mb-8">
	<div class="container max-w-[760px] flex flex-col mx-auto pb-4 md:pb-12 md:pt-8">
		<div class="flex flex-col items-center justify-center p-4">
            <form method="POST" action="/about?/subscribe" use:enhance>
                <div class="space-y-1 w-full">
                    <label for="name" class="label font-bold">Name</label>
                    <input required type="text" name="name" placeholder="Enter your name" class="input w-full outline outline-base-content/5" />
                    <label for="email" class="label font-bold">Email</label>
                    <input required type="email" name="email" placeholder="Enter your email" class="input w-full outline outline-base-content/5" />
                    <div class="col-span-2 flex justify-between items-center pt-2">
                        <div>
                            <span class="label-text">By submitting you confirm you have read<br>and accept the <button class="link link-accent" on:click|preventDefault={() => showModal('privacy_policy')}>Privacy Policy.</button></span>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="btn btn-outline btn-primary w-full">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>