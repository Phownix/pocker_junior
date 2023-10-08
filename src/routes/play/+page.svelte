<script>
    // @ts-nocheck
    import AsideComponent from "../Components/AsideComponent.svelte";
    import CommunityComponent from "../Components/CommunityComponent.svelte";
    import OpponentComponent from "../Components/OpponentComponent.svelte";
    import { _evaluate, _sortPlayers, _deal, _shuffle } from "$lib/Hand.js";
    import "../../style/app.scss"
    // hands in the board
    const house = {};
    const cards = {};
    let { global_winner, global_bestHand } = {};
    let pp = -1;
    
    function initGame(){
        if( pp>=4 || pp<=0 ){ _shuffle(); pp=0; }
        cards.player0 = _deal();
        cards.player1 = _deal();
        cards.player2 = _deal();
        cards.player3 = _deal();
        house.community = _deal(5);

        global_winner = {};
        global_bestHand = "...";
        pp++;
    }
  
    function determineWinner(hd) {
        let winner = null;
        let bestHand = null;
        let _hands = _sortPlayers(hd);
  
        for (const player of _hands) {
            const hand = hd[player].concat(house.community);
            const result = _evaluate(hand);
    
            if (!bestHand || result.type > bestHand.type) {
                bestHand = result;
                winner = player;
            }
        }
        
        global_winner = winner;
        global_bestHand = bestHand;

        return { winner, bestHand };
    }

    function checkWinner(){
        determineWinner(cards);
    }
  
    initGame(); // start game
    checkWinner() // check Winner
</script>

<main>
    <section>
        <nav>
            <OpponentComponent winner={global_winner == "player1"} hand={cards.player1} name='Guillermo' />
            <OpponentComponent winner={global_winner == "player2"} hand={cards.player2} name='Anon' />
            <OpponentComponent winner={global_winner == "player3"} hand={cards.player3} name='Pupul' />
        </nav>
        <CommunityComponent _cards={house.community} _bestHand={global_bestHand.type ?? ""}/>
        <footer>
            <p>Poker Junior 2023 | Create By <a href="https://phownix.vercel.app/">Phownix</a></p>
        </footer>
    </section>

    <AsideComponent 
        name="Player Main" 
        winner={global_winner == "player0"} 
        hand={cards.player0}
        {initGame} 
        {checkWinner}
    />
</main>

<style lang="scss">
    main{
        display: grid;
        grid-template-columns: 1fr 20rem;
        background-color: $table;
        color: $table-text;
        height: 100%;
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        nav{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            gap: 2rem;
            padding: 1rem 2rem;
            width: 100%;
        }

        footer{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25rem;
            color: $hide-text;
            font-size: .8em;
            padding: .25rem;

            a {
                font-weight: 600;
                opacity: .75;

                &:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>