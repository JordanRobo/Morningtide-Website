<script context="module">
    const wordpressRoutes = /\/(wp-admin|wp-includes|wp-content)/;

    // @ts-ignore
    export function preload({ path }) {
        if (path === '/robots.txt') {
        
        return {
            status: 200,
                body: `User-agent: *\nAllow: /\n\nSitemap: https://your-domain.com/sitemap.xml`
            };
        } else if (wordpressRoutes.test(path)) {

        return {
            status: 200,
            body: `
                <h1>Nice try, bot!</h1>
                <p>This isn't a WordPress site, but I appreciate your enthusiasm.</p>
                <p>Maybe try crawling somewhere else? 🤖</p>
            `
            };
        }
    }
</script>