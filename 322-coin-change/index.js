/*
* 322. Coin Change
* https://leetcode.com/problems/coin-change/
*
*/

const coinChange = (coins, amount) => {
    coins = coins.sort((a, b) => a - b);

    const minCount = new Array(amount + 1).fill(Infinity);
    minCount[0] = 0;

    for (let num = 1; num <= amount; num++) {
        for (const coin of coins) {
            if (coin > num) break;
            minCount[num] = Math.min(minCount[num], 1 + minCount[num - coin]);
        }
    }

    return minCount[amount] === Infinity ? -1 : minCount[amount];
};