/*
* 790. Domino and Tromino Tiling
* https://leetcode.com/problems/domino-and-tromino-tiling
*
*/

const numTilings = n => {
    const mod = 10 ** 9 + 7;
    const dp = new Array(2).fill(null).map(() => [0, 1, 2, ...new Array(n)]);

    for (let i = 3; i <= n; i++) {
        dp[0][i] = (dp[0][i - 1] + dp[0][i - 2] + 2 * dp[1][i - 2]) % mod;
        dp[1][i] = (dp[1][i - 1] + dp[0][i - 1]) % mod;
    }

    return dp[0][n] % mod;
};
