<script>
    // @ts-nocheck
    import CardComponent from "./CardComponent.svelte";
    export let hand, name, winner, initGame, checkWinner;
</script>

<aside>
    <header>
        <h2 class="username {winner ? "winner" : ""}">{name}</h2>
        <span class="cash">$0.00</span>
    
        <div class="hand">
            {#each hand as p}
                <CardComponent _type="{p.type}" _number="{p.key}" _size="size2"/>
            {/each}
        </div>
    </header>

    <div class="action_buttons">
        <button on:click={initGame}>Deal Cards</button>
        <button on:click={checkWinner}>Check Winner</button>
    </div>
</aside>

<style lang="scss">
    aside{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
        background-color: $table-aside;
        padding: 2rem;

        header{
            text-align: right;
            margin-bottom: 1rem;
            .username{
                font-size: 2em;
            }

            .winner{
                color: $winner-text-color;
            }

            .cash{
                display: block;
                color: $cash;
                font-size: 1em;
            }

            .hand{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: .5rem;

                margin: 1rem 0;
            }
        }

        .action_buttons{
            display: flex;
            flex-direction: column;
            width: 100%;

            button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 1rem 2rem;
                border-radius: .5rem;
                font-size: 1em;
                font-weight: 600;
                color: $cl-button;
                background-color: rgba($color: $bg-button, $alpha: .2);
                border: 2px solid rgba($color: $br-button, $alpha: .3);
                box-shadow: inset 0 0 10px rgba($color: $bg-button, $alpha: .2);
                margin-bottom: .5rem;
                transition: all .1s ease-in-out;

                &:hover{
                    cursor: pointer;
                    transform: scale(1.02);
                    background-color: rgba($color: $bg-button, $alpha: .35);
                }

                &:active{
                    background-color: rgba($color: $bg-button, $alpha: .45);
                }
            }
        }
    }
</style>