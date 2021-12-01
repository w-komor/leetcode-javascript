/*

213. House Robber II
https://leetcode.com/problems/house-robber-ii/

Because the houses are arranged in a circle, we can rob either:
 - houses nums[0] to nums[nums.length - 2]
or:
 - houses nums[1] to nums[nums.length - 1]

We can use the solution from 198. House Robber I
and return the maximum result of those two cases.

We will need to handle the case where nums.length === 1 separately.

*/

const rob1 = nums => {
    let prev1 = 0,
        prev2 = 0;
    for (let num of nums) {
        [prev1, prev2] = [Math.max(prev2 + num, prev1), prev1];
    }
    return prev1;
};

const rob = nums => {
    if (nums.length === 1) {
        return nums[0];
    }
    const nums1 = nums.slice(0, nums.length - 1);
    const nums2 = nums.slice(1);
    return Math.max(rob1(nums1), rob1(nums2));
};