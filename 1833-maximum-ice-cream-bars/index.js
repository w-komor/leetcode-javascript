/*
* 1833. Maximum Ice Cream Bars
* https://leetcode.com/problems/maximum-ice-cream-bars/
*
*/

const maxIceCream = (costs, coins) => {
    costs.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < costs.length; i++) {
        if (sum + costs[i] > coins) return i;
        sum += costs[i];
    }
    return costs.length;
};
