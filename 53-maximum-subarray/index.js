/*

53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

// Kadane's Algorithm

*/

const maxSubArray = nums => {
    let max = -Infinity,
        start = 0,
        current = -Infinity;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] > current && current < 0) {
            start = end;
            current = nums[end];
        } else {
            current += nums[end];
        }
        max = Math.max(current, max);
    }

    return max;
};
