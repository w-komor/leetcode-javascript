/*
* 309. Best Time to Buy and Sell Stock with Cooldown
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
*
*/

const maxProfit = prices => {
    if (prices.length <= 1) return 0;
    const calc = (prev, price) => {
        const hold = Math.max(prev.hold, prev.wait - price);
        const sold = prev.hold + price;
        const wait = Math.max(prev.wait, prev.sold);
        return { hold, sold, wait };
    }
    const profits = prices.reduce(calc, { hold: -Infinity, sold: 0, wait: 0 });
    return Math.max(profits.sold, profits.wait);
};