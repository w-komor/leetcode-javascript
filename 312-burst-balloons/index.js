/*
* 312. Burst Balloons
* https://leetcode.com/problems/burst-balloons/
*
*/

//O(n^3);
const maxCoins = nums => {
    let n = nums.length;
    nums = [1, ...nums, 1];
    let dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

    // Iterate over each subarray (O(n^2))
    for (let length = 1; length <= n; length++) {
        for (let left = 1; left <= n - length + 1; left++) {
            let right = left + length - 1;
            for (let i = left; i <= right; i++) {
                // Coins gained by bursting the last balloon i
                let coins = nums[left - 1] * nums[i] * nums[right + 1];
                // Add coins from subintervals
                coins += dp[left][i - 1] + dp[i + 1][right];
                // Update the maximum coins for the subarray [left, right]
                dp[left][right] = Math.max(dp[left][right], coins);
            }
        }
    }

    return dp[1][n];
}