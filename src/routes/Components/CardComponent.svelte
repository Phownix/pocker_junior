<script>
    // @ts-nocheck
    // _type:string (spades, hearts, diamonds, clubs)
    // _number:string (A, 1, 2, 3, ..., Q, K)
    // _size:string (size1, size2, size3)
    export let _type, _number, _size;
    import spades from "../../lib/icons/spades.svg";
    import hearts from "../../lib/icons/hearts.svg";
    import diamonds from "../../lib/icons/diamonds.svg";
    import clubs from "../../lib/icons/clubs.svg";

    const types = {spades: spades, hearts: hearts, diamonds: diamonds, clubs: clubs}
</script>

<div class="card {_size}" title="{_number} of {_type}" aria-label="{_number} of {_type}">
    <span class="num">{_number}</span>
    <div class="icon _type">
        <img src="{types[_type]}" alt="1" />
    </div>
    <span class="num _reverse">{_number}</span>
</div>

<style lang="scss">
    .card{
        display: grid;
        grid-template-rows: 35% 30% 35%;
        align-items: center;
        justify-content: center;
        grid-gap: .25rem 0;
        aspect-ratio: 4/6;
        background-color: $color-card;
        color: #232323;
        overflow: hidden;
        box-shadow: 0 0 15px $shadow-card;
    }

    .card .num { display: block; text-align: center; font-weight: 600; }
    .card ._reverse{ transform: rotate(180deg) }

    .card .icon{ 
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1/1;
    }
    .card .icon img{
        width: 100%;
        height: 100%;
    }
    
    .size1{
        width: 10rem;
        height: 14rem;
        border-radius: 1rem;
        .num{ font-size: 3vw }
        .icon{ width: 3.5rem }
    }

    .size2{
        width: 5rem;
        height: 7rem;
        gap: 0rem;
        border-radius: .6rem;
        .num{ font-size: 2vw }
        .icon{ width: 1.5rem }
    }

    .size3{
        width: 1.7rem;
        height: 2.5rem;
        gap: 0rem;
        border-radius: .3rem;
        .num{ font-size: .8vw }
        .icon{ width: .6rem }

        &:last-of-type{
            margin-left: -.3rem;
        }
    }

    @media screen and (max-width: 1200px){
        .size1{
            width: 8rem;
            height: 11rem;
        }
    }
</style>