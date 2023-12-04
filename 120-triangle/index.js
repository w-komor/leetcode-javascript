/*
* 120. Triangle
* https://leetcode.com/problems/triangle/
*
*/

const minimumTotal = triangle => {
    const rows = triangle.length;
    const dp = Array.from({ length: rows }, (_, i) => new Array(i + 1));
    dp[0][0] = triangle[0][0];

    for (let row = 1; row < rows; row++) {
        for (let col = 0; col <= row; col++) {
            const leftCost = dp[row - 1][col - 1] !== undefined
                ? dp[row - 1][col - 1]
                : Infinity;
            const rightCost = dp[row - 1][col] !== undefined
                ? dp[row - 1][col]
                : Infinity;
            dp[row][col] = triangle[row][col] + Math.min(leftCost, rightCost);
        }
    }

    return Math.min(...dp[rows - 1]);
};