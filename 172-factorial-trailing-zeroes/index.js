/*
* 172. Factorial Trailing Zeroes
* https://leetcode.com/problems/factorial-trailing-zeroes/
*
* There will always be more 2s than 5s in the prime factorizations,
* so we just need to count the number of 5s.
*
*/

const trailingZeroes = n => {
    let zeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        zeroes += Math.floor(n / i);
    }
    return zeroes;
};
