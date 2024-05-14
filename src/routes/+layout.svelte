<script lang="ts">
	import '../app.css';
	import { Navbar, Footer, Drawernav, Top } from '$lib';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import { drawer } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { showModal } from '$lib/utils';
	import { enhance } from '$app/forms';
	
	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;
	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
	let isMobile = false;
    let mobileTimer: ReturnType<typeof setTimeout> | null = null;
	let cursorPosition = { x: 0, y: 0 };

	const showPopUpOnce = () => {
        const popUpShown = localStorage.getItem('popUpShown');
        if (!popUpShown) {
            showModal('subscribe_form');
            localStorage.setItem('popUpShown', 'true');
        }
    };

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			drawer.close();
			event.preventDefault();
		}
	};

	$: { if (data && data.pathname) { drawer.close(); }};

	onMount(() => {
        isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            mobileTimer = setTimeout(showPopUpOnce, 20000);
        } else {
            const handleMouseMove = (e: any) => {
                const cursorPosition = { x: e.clientX, y: e.clientY };
                const { innerWidth, innerHeight } = window;
                const { x, y } = cursorPosition;

                if (x <= 0 || x >= innerWidth || y <= 0 || y >= innerHeight) {
                    showPopUpOnce();
                }
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    });

    onDestroy(() => {
        if (mobileTimer) {
            clearTimeout(mobileTimer);
        }
    });

</script>

<dialog id="subscribe_form" class="modal">
	<div class="modal-box bg-primary text-white w-11/12 max-w-2xl p-8">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
			<div>
				<h1 class="font-bold">Leaving so soon?</h1>
				<p class="py-4">Don't forget to subscribe to our newsletter to keep in the loop.</p>
			</div>
			<form method="POST" action="?/subscribe" use:enhance>
				<div class="space-y-1 w-full">
					<label for="name" class="label font-bold">Name</label>
					<input type="text" name="name" placeholder="Enter your name" class="input w-full" />
					<label for="email" class="label font-bold">Email</label>
					<input type="email" name="email" placeholder="Enter your email" class="input w-full" />
					<div class="flex justify-end pt-3">
						<button class="btn btn-accent">Subscribe</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</dialog>

<div class="bg-stone-50 pb-8">
	<div class="min-h-dvh">
		<Navbar insights={data.tags}/>
		<div class="drawer drawer-end">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={$drawer}/>
			<div class="drawer-content">
		</div> 
		<div class="drawer-side z-50">
			<div class="drawer-overlay" role="button" tabindex="0" on:click={drawer.close} on:keydown={handleKeydown}></div>
				<ul class="menu p-4 w-80 min-h-full bg-white">
					<Drawernav insights={data.tags}/>
				</ul>
			</div>
		</div>
		{#key data.pathname}
			<div in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</div>
		{/key}
	</div>
</div>
<Footer />
<Top />