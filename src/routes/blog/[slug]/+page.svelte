<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const { title: { rendered: title }, content: { rendered: content }} = data.post;
</script>

<style>
    .content :global(p), .content :global(li), .content :global(li *) {
        font-size: 18px;
    }

    .content :global(h2), .content :global(h3), .content :global(h4) {
        margin: 1em 0 0.5em;
    }

    .content :global(.wp-block-image .aligncenter) {
        text-align: center;
    }

    .content :global(.wp-block-image img) {
        max-width: 100%;
    }

    .content :global([class*="wp-block-"]:not(.wp-block-heading)) {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .content :global(.wp-block-code code) {
        width: 100%;
        padding: 8px;
        overflow-x: auto;
    }

    .content :global(.has-text-align-center) {
        text-align: center;
    }

    .content :global(.has-small-font-size) {
        font-size: 0.9em;
    }

    .content :global(p *) {
        font-size: inherit;
    }

    .content :global(.wp-block-image .wp-element-caption) {
        width: 75%;
        margin: 0 auto;
    }
</style>

<svelte:head>
    <title>{title} | Andrew Bridge</title>
    <link href="https://unpkg.com/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<h1>{@html title}</h1>
<div class="content">{@html content}</div>