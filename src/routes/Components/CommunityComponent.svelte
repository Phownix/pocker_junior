<script>
    // @ts-nocheck
    import CardComponent from "./CardComponent.svelte";
    export let _cards, _bestHand = "...";
</script>

<div class="community">
    {#each _cards as c}
        <CardComponent _type="{c.type}" _number="{c.key}" _size="size1" />
    {/each}
    <span class="type">{_bestHand}</span>
</div>

<style lang="scss">
    .community{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: min-content;
        gap: .5rem 1rem;
        padding: 1rem;
        margin-bottom: 2em;

        .type{
            text-align: right;
            grid-column: 1/6;
            // font-weight: 600;
            padding: 0 .25rem;
            font-size: 1.25em;
            color: $hide-text;
            margin-bottom: -2em;
        }
    }
</style>