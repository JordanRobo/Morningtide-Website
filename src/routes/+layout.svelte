<script>
    import "../app.css";
    import { Navbar, Footer } from "$lib";
</script>


<Navbar />
<div class="min-h-screen">
    <slot />
</div>
<Footer />
