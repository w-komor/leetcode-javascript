/*
* 2483. Minimum Penalty for a Shop
* https://leetcode.com/problems/minimum-penalty-for-a-shop/
*
*/

const bestClosingTime = customers => {
    const prefix = new Array(customers.length + 1).fill(0);
    for (let i = 1; i <= customers.length; i++) {
        prefix[i] = prefix[i - 1] + (customers[i - 1] === 'N' ? 1 : 0);
    }

    const suffix = new Array(customers.length + 1).fill(0);
    for (let i = customers.length - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + (customers[i] === 'Y' ? 1 : 0);
    }

    let min = Infinity,
        minIndex = -1;
    for (let i = customers.length; i >= 0; i--) {
        const penalty = suffix[i] + prefix[i];
        if (penalty <= min) {
            min = penalty;
            minIndex = i;
        }
    }

    return minIndex;
};
