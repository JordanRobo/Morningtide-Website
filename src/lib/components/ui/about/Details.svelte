<script lang="ts">
    import { EnvelopeClosed, InstagramLogo, LinkedinLogo, Mobile, TwitterLogo } from 'svelte-radix';
    import { Portrait } from '$lib/images/uploads';
</script>


<div class="flex flex-col max-w-screen-lg mx-auto p-4 gap-4 my-12">
    <div class="flex flex-col items-center my-6">
        <h1 class="text-center text-2xl font-bold md:text-5xl">Our Founder</h1>
        <span class="divider divider-accent w-48 mx-auto"></span> 
    </div>
    <div class="grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-4">
		<div class="avatar justify-self-center">
			<div class="h-64 rounded-full">
				<img src={Portrait} alt="Stuart Robinson Headshot" />
			</div>
		</div>
		<div class="col-span-2">
			<h2 class="font-bold">Stuart Robinson</h2>
			<p>Founder, Stuart Robinson, has more than 25 years managing the business of schools. Equipped with his MBA (Leadership), a Bachelor of Business (Accounting and Marketing), and as a graduate of the Australian Institute of Company Directors, Stuart is highly capable and experienced to help you set your school’s strategy.</p>
            <div class="card bg-primary text-white shadow-xl mt-6">
                <div class="card-body">
                    <div class="flex flex-col justify-center lg:flex-row lg:justify-evenly gap-4">
                        <p class="flex items-start justify-center">
                            <EnvelopeClosed class="text-base-400 mx-2 h-6 w-6" />
                            <span class="mx-2 truncate font-bold">info@morningtide.com.au</span>
                        </p>
                        <p class="flex items-start justify-center">
                            <Mobile class="text-base-400 mx-2 h-6 w-6" />
                            <span class="mx-2 truncate font-bold">0403 987 946</span>
                        </p>
                            <div class="flex justify-center mt-2 lg:mt-0">
                                <a class="mx-1.5" href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="linkedin">
                                    <LinkedinLogo class="text-white mx-2 h-6 w-6" />
                                </a>
                                <a class="mx-1.5" href="https://twitter.com/Morningtide_Go" aria-label="twitter">
                                    <TwitterLogo class="text-white mx-2 h-6 w-6" />
                                </a>
                                <a class="mx-1.5" href="https://www.instagram.com/morningtide.consulting/" aria-label="instagram">
                                    <InstagramLogo class="text-white mx-2 h-6 w-6" />
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>