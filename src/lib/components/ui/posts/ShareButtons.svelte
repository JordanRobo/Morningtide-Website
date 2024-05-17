<script lang="ts">
	import { LinkedinLogo, TwitterLogo } from "svelte-radix";

	export let url: string; // The URL of the article to share
    export let title: string; // The title of the article

    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    function shareOnFacebook() {
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}`;
        window.open(fbShareUrl, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };

    function shareOnTwitter() {
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        window.open(twitterShareUrl, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };

    function shareOnLinkedIn() {
        const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`;
        window.open(linkedInShareUrl, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    };
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <button class="btn btn-primary" on:click={shareOnFacebook}><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>Share on Facebook</button>
    <button class="btn btn-primary" on:click={shareOnTwitter}><TwitterLogo class="text-white h-6 w-6" />Share on Twitter</button>
    <button class="btn btn-primary" on:click={shareOnLinkedIn}><LinkedinLogo class="text-white h-6 w-6" />Share on LinkedIn</button>
</div>