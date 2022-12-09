<script>
    import SiteLogo from './SiteLogo.svelte';
</script>

<style>
    header {
        border-bottom: 1px solid var(--foreground-colour, black);
        margin-bottom: 3em;
        padding: 0 1em;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    nav a {
        font-size: 28px;
        text-decoration: none;
        padding-left: 15px;
    }

    :global(html.dark) header {
        border-bottom-color: var(--background-color, white);
    }

    :global(html.dark) a {
        color: var(--background-color, white);
    }

    @media (prefers-color-scheme: dark) {
        :global(html) header {
            border-bottom-color: var(--background-color, white);
        }

        a {
            color: var(--background-color, white);
        }
    }
</style>

<header id="site-header">
    <SiteLogo />
    <nav>
        <!-- <a href="/about">About</a> -->
        <a href="/blog">Blog</a>
    </nav>
</header>