/*
* 913. Valid Permutations for DI Sequence
* https://leetcode.com/problems/valid-permutations-for-di-sequence/
*
*/

const numPermsDISequence = S => {
    const n = S.length,
        mod = 1e9 + 7;
    let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let j = 0; j <= n; j++) dp[0][j] = 1;

    for (let i = 0; i < n; i++) {
        if (S.charAt(i) === 'I') {
            for (let j = 0, cur = 0; j < n - i; j++) {
                cur = (cur + dp[i][j]) % mod;
                dp[i + 1][j] = cur;
            }
        } else {
            for (let j = n - i - 1, cur = 0; j >= 0; j--) {
                cur = (cur + dp[i][j + 1]) % mod;
                dp[i + 1][j] = cur;
            }
        }
    }

    return dp[n][0];
};