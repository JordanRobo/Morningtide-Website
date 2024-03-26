<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>


<Navbar />
<div class="min-h-screen">
    <slot />
</div>
<Footer />
