<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const { title: { rendered: title }, content: { rendered: content }} = data.post;
</script>

<style>
    .content :global(p), .content :global(li) {
        font-size: 18px;
    }
</style>

<h1>{@html title}</h1>
<div class="content">{@html content}</div>