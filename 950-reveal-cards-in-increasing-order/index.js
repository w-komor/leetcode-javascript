/*
* 950. Reveal Cards in Increasing Order
* https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
*
* Simulation approach: apply the reversed process of revealing the cards
* O(nlogn) time complexity because sorting is necessary
*
*/

const deckRevealedIncreasing = deck => {
    deck.sort((a, b) => a - b);

    const ordered = [deck[deck.length - 1]];

    for (let i = deck.length - 2; i >= 0; i--) {
        ordered.unshift(ordered.pop());
        ordered.unshift(deck[i]);
    }

    return ordered;
};