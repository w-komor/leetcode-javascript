/*
1877. Minimize Maximum Pair Sum in Array
https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
*/

/*
O(nlog(n)) solution:
 - sort the array
 - continously pair up the largest number with the smallest number
 - return the maximum sum
*/
const minPairSum = nums => {
    nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < nums.length / 2; i++) {
        max = Math.max(nums[i] + nums[nums.length - 1 - i], max);
    }
    return max;
};
