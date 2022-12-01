/*
* 72. Edit Distance
* https://leetcode.com/problems/edit-distance/
*
* Levenshtein distance algorithm
*
*/

const minDistance = (word1, word2) => {
    const [len1, len2] = [word1.length, word2.length];
    const dp = [...new Array(len1 + 1)].map(() => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i += 1) dp[i][0] = i;
    for (let i = 1; i <= len2; i += 1) dp[0][i] = i;

    for (let i = 1; i <= len1; i += 1) {
        for (let j = 1; j <= len2; j += 1) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1],
                    dp[i - 1][j],
                    dp[i][j - 1],
                ) + 1;
            }
        }
    }

    return dp[len1][len2];
};
