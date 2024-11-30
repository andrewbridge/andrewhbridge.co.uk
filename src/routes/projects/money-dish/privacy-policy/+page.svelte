<script>
    import { marked } from 'marked';

    // Import the markdown file directly - Vite will handle this
    import markdownContent from './content.md?raw';

    // Convert markdown to HTML immediately
    const htmlContent = marked(markdownContent);
</script>

<article>
    {@html htmlContent}
</article>

<style>
    article {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
