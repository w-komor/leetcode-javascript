/*
* 202. Happy Number
* https://leetcode.com/problems/happy-number/
*
*/

const isHappy = n => {
    const occ = {};

    while (!occ[n]) {
        occ[n] = true;
        n = n.toString()
            .split('')
            .map(Number)
            .reduce((a, b) => a + b ** 2, 0);
        if (n === 1) return true;
    }

    return false;
};
