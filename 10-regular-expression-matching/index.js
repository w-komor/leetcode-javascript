/*
* 10. Regular Expression Matching
* https://leetcode.com/problems/regular-expression-matching/
*
*/

const isMatch = (s, p) => {
    const dp = Array(p.length + 1).fill(null).map(() => Array(s.length + 1).fill(false));
    dp[0][0] = true;

    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            dp[i][0] = dp[i][0] || dp[i - 2][0];
        }
    }

    for (let i = 1; i <= p.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (p[i - 1] === s[j - 1] || p[i - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[i - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i - 2][j];
                if (!dp[i][j] && (p[i - 2] === '.' || p[i - 2] === s[j - 1])) {
                    dp[i][j] = dp[i][j - 1];
                }
            }
        }
    }

    return dp[p.length][s.length];
}