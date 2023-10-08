<script>
    // @ts-nocheck
    import CardComponent from "./CardComponent.svelte";
    export let hand, name, winner;
</script>

<div class='opponent'>
    <div class="hand">
        {#each hand as p}
            <CardComponent _type="{p.type}" _number="{p.key}" _size="size3"/>
        {/each}
    </div>
    <div class="player">
        <h3 class="opp_name {winner ? "winner" : ""}">{name}</h3>
        <span class="cash">$0.00</span>
    </div>
</div>

<style lang="scss">
    .opponent{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: .5rem;
        align-items: center;
        margin-left: -3rem;

        .hand{
            display: flex;
            font-size: .75em;
            line-height: 1em;
        }

        .player{
            h3{
                font-size: 1.5em;
                line-height: 1em;
            }

            .winner{
                color: $winner-text-color;
            }

            .cash{
                display: block;
                color: $cash;
                font-size: .8em;
            }
        }
    }
</style>