<style>
    ul {
        display: flex;
        justify-content: space-between;
        width: 50%;
        min-width: 285px;
        margin: 0 auto;
    }

    li {
        display: block;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        position: relative;
        border-radius: .5em;
        filter: contrast(80%);
        box-shadow: 0 0 1px rgba(0,0,0,0.5);
        transition: 0.25s box-shadow ease-in-out, 0.25s filter ease-in-out;
    }

    li:hover, li:focus, li:focus-within, li:active {
        filter: contrast(120%);
        box-shadow: 0 0 5px rgba(0,0,0,0.25);
    }

    li span {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    li.github {
        background-image: url('/icons/github.svg');
    }

    li.twitter {
        background-image: url('/icons/twitter.svg');
    }

    li.linkedin {
        background-image: url('/icons/linkedin.svg');
    }

    li.stackoverflow {
        background-image: url('/icons/stackoverflow.svg');
    }

    li.codepen {
        background-image: url('/icons/codepen.svg');
    }
</style>

<ul>
    <li class="github"><a class="overlay-link" href="https://github.com/andrewbridge"><span>GitHub</span></a></li>
    <li class="twitter"><a class="overlay-link" href="https://twitter.com/andrewbridge"><span>Twitter</span></a></li>
    <li class="linkedin"><a class="overlay-link" href="http://uk.linkedin.com/in/andrewbridge"><span>LinkedIn</span></a></li>
    <li class="stackoverflow"><a class="overlay-link" href="http://stackoverflow.com/users/3218960/theshrew"><span>StackOverflow</span></a></li>
    <li class="codepen"><a class="overlay-link" href="https://codepen.io/andrewbridge"><span>Codepen</span></a></li>
</ul>