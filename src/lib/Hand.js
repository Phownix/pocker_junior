import { winningHands } from "./winning_hands.js"
import deck from "./json/deck.json";

export function _deal(nc=2) {
    let hd = [];
    for (let i = 0; i < nc; i++) {
        let ct = deck.pop();
        hd.push(ct);
        deck.unshift(ct);
    }

    return hd; 
}

export function _shuffle() {
    deck.forEach((e,i,a) => {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    })
}

export function _sortPlayers (players) {
    return Object.keys(players).sort((player1, player2) => {
        const maxCard1 = Math.max(
            parseInt(players[player1][0].value),
            parseInt(players[player1][1].value)
        );

        const maxCard2 = Math.max(
            parseInt(players[player2][0].value),
            parseInt(players[player2][1].value)
        );

        return maxCard2 - maxCard1;
    });
}

export function _evaluate (hand) {
    hand.sort(function(a, b) {
        a = parseInt(a.value);
        b = parseInt(b.value);
    
        if (a < b) { return 1 } 
        else if (a > b) { return -1 } 
        else { return 0 }
    });

    switch(true){
        case winningHands.hasRoyalFlush(hand):
            return { type: "Royal Flush", cards: hand };
        case winningHands.hasStraightFlush(hand):
            return { type: "Straight Flush", cards: hand };
        case winningHands.hasFourOfAKind(hand):
            return { type: "Four of a Kind", cards: hand };
        case winningHands.hasFullHouse(hand):
            return { type: "Full House", cards: hand };
        case winningHands.hasFlush(hand):
            return { type: "Flush", cards: hand };
        case winningHands.hasStraight(hand):
            return { type: "Straight", cards: hand };
        case winningHands.hasThreeOfAKind(hand):
            return { type: "Three of a Kind", cards: hand };
        case winningHands.hasTwoPair(hand):
            return { type: "Two Pair", cards: hand };
        case winningHands.hasOnePair(hand):
            return { type: "One Pair", cards: hand };
        default:
            return { type: "High Card", cards: [hand[hand.length - 1]] };
    }
}