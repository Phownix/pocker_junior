<script>
    import "../style/app.scss"
</script>

<main>
    <h1>Welcome to Poker Junior</h1>
    <a href="play">Play Now</a>
</main>

<style lang="scss">
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        height: 100%;
        margin: 1rem auto;

        h1{
            line-height: 1em;
            margin-bottom: 1rem;
            font-size: 3em;
        }

        a{
            font-size: 1.5em;
            background-color: rgba($color: $link-color, $alpha: 0.8);
            color: $background;
            padding: .5rem 1rem;
            border-radius: .25rem;
            font-weight: 600;

            &:hover{
                text-decoration: none;
                background-color: rgba($color: $link-color, $alpha: 0.9);
            }

            &:active{
                background-color: rgba($color: $link-color, $alpha: 1);
            }
        }
    }
</style>