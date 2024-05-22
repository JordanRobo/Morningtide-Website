<script lang="ts">
    import { EnvelopeClosed, InstagramLogo, LinkedinLogo, Mobile, TwitterLogo } from 'svelte-radix';
</script>

<div class="card bg-primary text-white shadow-xl">
    <div class="card-body">
        <div class="mt-6 md:mt-8 flex justify-evenly">
            <p class="flex items-start">
                <EnvelopeClosed class="text-base-400 mx-2 h-6 w-6" />
                <span class="mx-2 truncate font-bold">info@morningtide.com.au</span>
            </p>
            <p class="flex items-start">
                <Mobile class="text-base-400 mx-2 h-6 w-6" />
                <span class="mx-2 truncate font-bold">0403 987 946</span>
            </p>
        </div>
        <div class="flex gap-4 justify-center">
            <div class="-mx-1.5 mt-4">
                <a class="btn mx-1.5 rounded-full bg-base-100" href="https://www.linkedin.com/in/stuart-robinson-mba/" aria-label="linkedin">
                    <LinkedinLogo class="text-base-400 mx-2 h-6 w-6" />
                </a>
                <a class="btn mx-1.5 rounded-full bg-base-100" href="https://twitter.com/Morningtide_Go" aria-label="twitter">
                    <TwitterLogo class="text-base-400 mx-2 h-6 w-6" />
                </a>
                <a class="btn mx-1.5 rounded-full bg-base-100" href="https://www.instagram.com/morningtide.consulting/" aria-label="instagram">
                    <InstagramLogo class="text-base-400 mx-2 h-6 w-6" />
                </a>
            </div>
        </div>
    </div>
</div>