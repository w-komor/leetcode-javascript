/*
* 714. Best Time to Buy and Sell Stock with Transaction Fee
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
*
*/

const maxProfit = (prices, fee, index = 0, buy = true, memo = {}) => {
    if (index >= prices.length) return 0;
    if (memo[index] && memo[index][buy] !== undefined) {
        return memo[index][buy];
    }

    if (!memo[index]) memo[index] = {};

    if (buy) {
        memo[index][buy] = Math.max(
            -prices[index] - fee + maxProfit(prices, fee, index + 1, false, memo),
            maxProfit(prices, fee, index + 1, true, memo)
        );
    } else {
        memo[index][buy] = Math.max(
            prices[index] + maxProfit(prices, fee, index + 1, true, memo),
            maxProfit(prices, fee, index + 1, false, memo)
        );
    }

    return memo[index][buy];
};