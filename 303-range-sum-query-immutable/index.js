/*
* 303. Range Sum Query - Immutable
* https://leetcode.com/problems/range-sum-query-immutable/
*
*/

class NumArray {
    constructor(nums) {
        this.prefixSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }

    sumRange(left, right) {
        return this.prefixSum[right + 1] - (left === 0 ? 0 : this.prefixSum[left]);
    }
}