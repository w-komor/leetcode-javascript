/*
* 494. Target Sum
* https://leetcode.com/problems/target-sum/
*
*/

const findTargetSumWays = (nums, target) => {
    let total = nums.reduce((acc, num) => acc + num, 0);
    if (Math.abs(target) > total) return 0; // Target not achievable

    let dp = new Array(nums.length).fill(0).map(() => new Array(2 * total + 1).fill(0));
    dp[0][nums[0] + total] = 1;
    dp[0][-nums[0] + total] += 1;

    for (let i = 1; i < nums.length; i++) {
        for (let sum = -total; sum <= total; sum++) {
            if (dp[i - 1][sum + total] > 0) {
                dp[i][sum + nums[i] + total] += dp[i - 1][sum + total];
                dp[i][sum - nums[i] + total] += dp[i - 1][sum + total];
            }
        }
    }

    return dp[nums.length - 1][target + total];
}