/*
* 664. Strange Printer
* https://leetcode.com/problems/strange-printer/
*
*/

const strangePrinter = s => {
    const n = s.length;
    const dp = Array.from({length: n}, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 1;
            } else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1;
            }
            for (let k = i + 1; k < j; k++) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j-1]);
                }
            }
        }
    }

    return dp[0][n-1];
};
