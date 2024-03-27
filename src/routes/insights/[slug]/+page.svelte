<script lang="ts">
    export let data;
    import { formatMarkdown } from "$lib";

    let post = data.post;

    function countWords(content: string): number {
        return content.trim().split(/\s+/).length;
    }

    function readingTime(content: string): string {
        const words = countWords(content);
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    }
</script>

<div class="flex flex-col max-w-[640px] mx-auto bg-white mb-4 p-4">
    <div class="space-y-6">
        <h1 class="h1 text-4xl text-center">{post.title}</h1>
        <h3 class="h3 text-2xl text-center text-accent">{post.subtitle}</h3>
        <div class="flex justify-around p-2 border-t border-b">
            <p>{readingTime(post.content)}</p>
            <p>By {post.author}</p>
            <p>{post.date}</p>
        </div>
        <div class="prose pl-4">
            {@html formatMarkdown(post.content)}
        </div>
    </div>
</div>