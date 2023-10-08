// @ts-nocheck
export class winningHands{
    static hasOnePair(hand) {
        const valueCounts = {};
        for (const card of hand) {
            if (valueCounts[card.value]) {
                return true;
            }
            valueCounts[card.value] = 1;
        }
        return false;
    }

    static hasTwoPair(hand) {
        const valueCounts = {};
        let pairCount = 0;
        for (const card of hand) {
            if (valueCounts[card.value]) {
                valueCounts[card.value]++;
                if (valueCounts[card.value] === 2) {
                    pairCount++;
                }
            } else {
                valueCounts[card.value] = 1;
            }
        }
        return pairCount >= 2;
    }

    static hasThreeOfAKind(hand) {
        const valueCounts = {};
        let pairCount = 0;
        for (const card of hand) {
            if (valueCounts[card.value]) {
                valueCounts[card.value]++;
                if (valueCounts[card.value] === 3) {
                    pairCount++;
                }
            } else {
                valueCounts[card.value] = 1;
            }
        }
        return pairCount >= 3;
    }

    static hasFourOfAKind(hand) {
        const valueCounts = {};
        for (const card of hand) {
            if (valueCounts[card.value]) {
                valueCounts[card.value]++;
                if (valueCounts[card.value] === 4) {
                    return true;
                }
            } else {
                valueCounts[card.value] = 1;
            }
        }
        return false;
    }

    static hasStraight(hand) {
        const values = hand.map(card => parseInt(card.value));
        values.sort((a, b) => a - b);
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i + 1] - values[i] !== 1) {
                return false;
            }
        }
        return true;
    }

    static hasFlush(hand) {
        const type = hand[0].type;
        return hand.every(card => card.type === type);
    }

    static hasFullHouse(hand) {
        return this.hasThreeOfAKind(hand) && this.hasOnePair(hand);
    }

    static hasStraightFlush(hand) {
        return this.hasStraight(hand) && hasFlush(hand);
    }

    static hasRoyalFlush(hand) {
        return this.hasStraightFlush(hand) && hand.some(card => card.value === "A");
    }
}  
  