/*
* 918. Maximum Sum Circular Subarray
* https://leetcode.com/problems/maximum-sum-circular-subarray/
*
*/

const maxSubarraySumCircular = nums => {
    let total = 0,
        min = nums[0],
        max = nums[0],
        currentMin = 0;
        currentMax = 0;

    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        max = Math.max(max, currentMax);
        currentMin = Math.min(currentMin + nums[i], nums[i]);
        min = Math.min(min, currentMin);
        total += nums[i];
    }

    return max > 0 ? Math.max(max, total - min) : max;
}
