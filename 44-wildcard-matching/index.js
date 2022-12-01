/*
* 44. Wildcard Matching
* https://leetcode.com/problems/wildcard-matching/
*
* DP solution O(nm) time and O(nm) space
* Algorithm is similar to Levenshtein distance
*
*/

const isMatch = (s, p) => {
    const dp = Array(s.length + 1).fill(null).map(() => Array(p.length+1).fill(false));
    dp[0][0] = true;

    for (let i = 1; i <= s.length; i++) {
        dp[i][0] = false;
    }

    for (let i = 1; i <= p.length; i++) {
        dp[0][i] = dp[0][i-1] && p[i-1] == '*';
    }
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[s.length][p.length];
}
