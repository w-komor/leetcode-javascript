/*
* 518. Coin Change
* https://leetcode.com/problems/coin-change-2/
*
*/

const change = (amount, coins, i = 0, dp = {}) => {
    if (amount === 0) return 1;
    if (i >= coins.length) return 0;
    if (dp[i] === undefined) dp[i] = {};
    if (dp[i][amount] !== undefined) return dp[i][amount];
    return dp[i][amount] = (coins[i] > amount)
        ? change(amount, coins, i + 1, dp)
        : dp[i][amount] = change(amount - coins[i], coins, i, dp) + change(amount, coins, i + 1, dp);
};