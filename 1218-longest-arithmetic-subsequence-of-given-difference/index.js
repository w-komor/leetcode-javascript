/*
* 1218. Longest Arithmetic Subsequence of Given Difference
* https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
*
*/

const longestSubsequence = (arr, difference) => {
    const dp = {};
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        const prev = arr[i] - difference;
        const longestBefore = dp[prev] ? dp[prev] : 0;
        dp[arr[i]] = longestBefore + 1;
        answer = Math.max(answer, dp[arr[i]]);
    }

    return answer;
};
