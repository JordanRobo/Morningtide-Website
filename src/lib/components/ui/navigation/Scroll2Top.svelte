<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let showButton = false;
    const scrollThreshold = 200;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    const handleScroll = () => {
        showButton = window.scrollY > scrollThreshold;
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<main>
    {#if showButton}
        <button class="btn btn-circle btn-accent fixed bottom-2 right-2" transition:fade={{ duration: 300 }} on:click={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                    <path fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                </svg>
        </button>
    {/if}
</main>