/*
* 122. Best Time to But and Sell Stock II
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
*
*/

const maxProfit = prices => prices.reduce(
    (profit, price, i, prices) => profit + Math.max(0, (prices[i + 1] || 0) - price),
0);
