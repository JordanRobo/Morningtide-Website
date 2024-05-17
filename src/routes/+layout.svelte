<script lang="ts">
	import '../app.css';
	import { Footer, Mobile, Main, Scroll2Top } from '$lib/components/ui/navigation';
	import { SubscribeForm, PrivacyPolicy } from '$lib/components/ui/modal';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import { drawer } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { showModal } from '$lib/utils';
	
	export let data: LayoutData;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;
	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
	let isMobile = false;
    let mobileTimer: ReturnType<typeof setTimeout> | null = null;

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
            mobileTimer = setTimeout(showPopUpOnce, 10000);
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
<PrivacyPolicy data={data.privacyPolicy} />
<SubscribeForm />
	<div class="bg-stone-50 pb-8">
		<Main insights={data.tags}/>
		<div class="drawer drawer-end">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={$drawer}/>
			<div class="drawer-content">
		</div> 
		<div class="drawer-side z-50">
			<div class="drawer-overlay" role="button" tabindex="0" on:click={drawer.close} on:keydown={handleKeydown}></div>
				<ul class="menu p-4 w-80 min-h-full bg-white">
					<Mobile insights={data.tags}/>
				</ul>
			</div>
		</div>
		{#key data.pathname}
			<div in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</div>
		{/key}
	</div>
<Footer />
<Scroll2Top />