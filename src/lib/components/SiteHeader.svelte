<script>
    import SiteLogo from './SiteLogo.svelte';
</script>

<style>
    header, :global(html.light) header {
        position: relative;
        border-bottom: 1px solid var(--foreground-colour, black);
        margin-bottom: 3em;
        padding: 0 1em;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    header :global(.logo) {
        flex-grow: 1;
    }

    nav a {
        font-size: 28px;
        text-decoration: none;
        padding-left: 15px;
    }

    :global(html.dark) header {
        border-bottom-color: var(--background-color, white);
    }

    :global(html.light) nav a {
        color: var(--foreground-colour, white);
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

    .dark-mode-toggle {
        margin-left: 8px;
        padding-left: 8px;
        position: relative;
    }

    .dark-mode-toggle::before {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: -4px;
        left: 0;
        background-color: var(--foreground-colour);
    }

    :global(html.dark) .dark-mode-toggle::before {
        background-color: var(--background-color, white);
    }

    @media (prefers-color-scheme: dark) {
        :global(html:not(.light)) .dark-mode-toggle::before {
            background-color: var(--background-color, white);
        }
    }

    html.light .dark-mode-toggle .dark {
        display: none;
    }

    html.dark .dark-mode-toggle .light {
        display: none;
    }

    @media (prefers-color-scheme: dark) {
        html:not(.light) .dark-mode-toggle .light {
            display: none;
        }

        html:not(.light) .dark-mode-toggle .dark {
            display: initial;
        }
    }
</style>

<header id="site-header">
    <SiteLogo />
    <nav>
        <!-- <a href="/about">About</a> -->
        <a href="/blog">Blog</a>
    </nav>
    <div class="dark-mode-toggle">
        <svg class="dark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002c-.15.03-.3.056-.45.081a32.731 32.731 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a32.753 32.753 0 0 1-4.645-.425c-.15-.025-.3-.05-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7ZM3.21 7.116A31.27 31.27 0 0 0 8 7.5a31.27 31.27 0 0 0 4.791-.384L10.171 1H5.83L3.209 7.116Z"/>
            <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.052.075l-.001.004-.004.01V14l.002.008a.147.147 0 0 0 .016.033.62.62 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411Z"/>
        </svg>
        <svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002c-.15.03-.3.056-.45.081a32.731 32.731 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a32.753 32.753 0 0 1-4.645-.425c-.15-.025-.3-.05-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7Z"/>
            <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.052.075l-.001.004-.004.01V14l.002.008a.147.147 0 0 0 .016.033.62.62 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411Z"/>
        </svg>
    </div>
</header>