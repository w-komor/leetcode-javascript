/*
* 188. Best Time to Buy and Sell Stock IV
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
*
* Top-down DP:
* dp[index][canBuy][k]
*
*/

const maxProfit = (k, prices, index = 0, buy = true, memo = {}) => {
    if (k <= 0 || index >= prices.length) return 0;
    if (memo[index] && memo[index][buy] && memo[index][buy][k] !== undefined) {
        return memo[index][buy][k];
    }

    if (!memo[index]) memo[index] = {};
    if (!memo[index][buy]) memo[index][buy] = {};

    if (buy) {
        memo[index][buy][k] = Math.max(
            -prices[index] + maxProfit(k, prices, index + 1, false, memo),
            maxProfit(k, prices, index + 1, true, memo)
        );
    } else {
        memo[index][buy][k] = Math.max(
            prices[index] + maxProfit(k - 1, prices, index + 1, true, memo),
            maxProfit(k, prices, index + 1, false, memo)
        );
    }

    return memo[index][buy][k];
};