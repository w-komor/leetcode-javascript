/*
* 2073. Time Needed to Buy Tickets
* https://leetcode.com/problems/time-needed-to-buy-tickets/
*
*/

const timeRequiredToBuy = (tickets, k) => {
    let result = 0;

    for (let i = 0; i < k; i++) {
        result += Math.min(tickets[k], tickets[i]);
    }

    result += tickets[k];

    for (let i = k + 1; i < tickets.length; i++) {
        result += Math.min(tickets[k] - 1, tickets[i]);
    }

    return result;
};