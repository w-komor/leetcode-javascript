/*
* 509. Fibonacci Number
* https://leetcode.com/problems/fibonacci-number/
*
*/

const fib = (n, memo = {}) => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};
