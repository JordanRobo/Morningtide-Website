<script lang="ts">
    import { Avatar, CheckCircled, ChevronRight, MagnifyingGlass, MixerHorizontal, Rocket } from 'svelte-radix';
</script>

    <div class="flex flex-col items-center my-6">
        <h1 class="text-center text-2xl font-bold md:text-5xl">Our Values</h1>
        <span class="divider divider-accent w-48 mx-auto"></span> 
    </div>
    <div class="flex flex-wrap justify-center gap-4">
        <label class="swap swap-flip">
            <input type="checkbox" />
            <div class="card w-72 h-48 bg-primary text-white swap-off rounded-br-[96px]">
                <div class="card-body">
                    <Avatar class="h-16 w-16" />
                    <h3>Respectful</h3>
                    <ChevronRight class="h-7 w-7" />
                </div>
            </div>
            <div class="card w-72 bg-white swap-on rounded-bl-[96px] border">
                <div class="grid h-48 place-items-center p-2 -mt-2">
                    <p class="text-center">We believe in the genius of others and that we each have a part to play.</p>
                </div>
            </div>
        </label>
        <label class="swap swap-flip">
            <input type="checkbox" />
            <div class="card w-72 h-48 bg-primary text-white swap-off rounded-br-[96px]">
                <div class="card-body">
                    <MagnifyingGlass class="h-16 w-16" />
                    <h3>Inquisitive</h3>
                    <ChevronRight class="h-7 w-7" />
                </div>
            </div>
            <div class="card w-72 bg-white swap-on rounded-bl-[96px] border">
                <div class="grid h-48 place-items-center p-2 -mt-2">
                    <p class="text-center">We believe that the status quo should be continually probed and challenged.</p>
                </div>
            </div>
        </label>
        <label class="swap swap-flip">
            <input type="checkbox" />
            <div class="card w-72 h-48 bg-primary text-white swap-off rounded-br-[96px]">
                <div class="card-body">
                    <CheckCircled class="h-16 w-16" />
                    <h3>Best-practice</h3>
                    <ChevronRight class="h-7 w-7" />
                </div>
            </div>
            <div class="card w-72 bg-white swap-on rounded-bl-[96px] border">
                <div class="grid h-48 place-items-center p-2 -mt-2">
                    <p class="text-center">We believe that change should always be informed by data, and continual assessment.</p>
                </div>
            </div>
        </label>
        <label class="swap swap-flip">
            <input type="checkbox" />
            <div class="card w-72 h-48 bg-primary text-white swap-off rounded-br-[96px]">
                <div class="card-body">
                    <Rocket class="h-16 w-16" />
                    <h3>Innovative</h3>
                    <ChevronRight class="h-7 w-7" />
                </div>
            </div>
            <div class="card w-72 bg-white swap-on rounded-bl-[96px] border">
                <div class="grid h-48 place-items-center p-2 -mt-2">
                    <p class="text-center">We believe that today's solutions become tomorrow's problems. We need to remain acutely aware of our environment as we innovate.</p>
                </div>
            </div>
        </label>
        <label class="swap swap-flip">
            <input type="checkbox" />
            <div class="card w-72 h-48 bg-primary text-white swap-off rounded-br-[96px]">
                <div class="card-body">
                    <MixerHorizontal class="h-16 w-16" />
                    <h3>Practical</h3>
                    <ChevronRight class="h-7 w-7" />
                </div>
            </div>
            <div class="card w-72 bg-white swap-on rounded-bl-[96px] border">
                <div class="grid h-48 place-items-center p-2 -mt-2">
                    <p class="text-center">We believe that solutions must be practical.  Every problem requires the right tool for its solution.</p>
                </div>
            </div>
        </label>
    </div>
