/* 
* 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
* https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
*
*/

function longestSubarray(nums, limit) {
    let maxDeque = []; // Stores indices of elements in decreasing order
    let minDeque = []; // Stores indices of elements in increasing order
    let left = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        // Maintain maxDeque
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain minDeque
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] > nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Shrink window if difference exceeds limit
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            if (maxDeque[0] === left) maxDeque.shift();
            if (minDeque[0] === left) minDeque.shift();
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}