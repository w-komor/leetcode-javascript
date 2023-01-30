/*
* 1137. N-th Tribonacci Number
* https://leetcode.com/problems/n-th-tribonacci-number/
*
*/

let memo = { 0: 0, 1: 1, 2: 1 };

const tribonacci = n => {
    if (memo[n] === undefined) {
        memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    }
    return memo[n];
};
