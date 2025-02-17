<style>
    
    img, :global(html.light) img {
        border-radius: 200px;
        width: 200px;
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
        border: 10px solid whitesmoke;
        background-color: var(--foreground-colour);
    }

    :global(html.dark) img {
        border-color: var(--background-colour);
        background-color: whitesmoke;
    }

    @media (prefers-color-scheme: dark) {
        :global(html) img {
            border-color: var(--background-colour);
            background-color: whitesmoke;
        }   
    }
</style>

<img src="/avatar.gif" />