<script lang="ts">
    import { HappyTeam } from "$lib/images/uploads";
</script>

<div class="flex flex-col max-w-screen-lg mx-auto p-4 gap-4 my-12">
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure class="w-full lg:w-1/2 p-4"><img src={HappyTeam} alt="Happy Team"class="object-cover h-full" /></figure>
        <div class="card-body">
            <div class="space-y-2">
                <h1 class="card-title text-2xl font-bold md:text-5xl">Our Clients</h1>
                <span class="divider divider-accent w-48"></span> 
                <p>Schools engage with us when they:</p>
                <ul class="list-disc list-outside ml-4 pt-2">
                    <li>Need help facilitating the creation of strategy by collaborating with stakeholders</li>
                    <li>Want a successful implementation plan and framework</li>
                    <li>Seek assistance to review their current strategy or execution</li>
                    <li>Are keen to measure the success of their strategy and need an external audit</li>
                </ul>
            </div>
            <div class="space-y-2 my-4">
                <h1 class="card-title text-center text-2xl font-bold md:text-5xl md:text-left">Our Vision</h1>
                <span class="divider divider-accent w-48"></span> 
                <p>To be the leading strategic advocate of schools across Australia.</p>
            </div>
        </div>
    </div>
</div>
