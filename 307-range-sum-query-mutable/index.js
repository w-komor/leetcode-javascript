/*
* 307. Range Sum Query - Mutable
* https://leetcode.com/problems/range-sum-query-mutable/
*
* Using an array to represent a Binary Indexed Tree (BIT)
* also known as a Fenwick tree.
*
* Moving to the next node:
* index += index & -index;
*
* Moving to the parent node:
* index -= index & -index;
*
*/

class NumArray {
    constructor(nums) {
        this.data = nums;
        this.size = nums.length;
        this.BIT = new Array(this.size + 1).fill(0);

        for (let i = 0; i < this.size; i++) {
            this.updateBIT(i, nums[i]);
        }
    }

    updateBIT(index, val) {
        index += 1;
        while (index <= this.size) {
            this.BIT[index] += val;
            index += index & -index;
        }
    }

    update(index, val) {
        const diff = val - this.data[index];
        this.data[index] = val;
        this.updateBIT(index, diff);
    }

    queryBIT(index) {
        let result = 0;
        index += 1;
        while (index > 0) {
            result += this.BIT[index];
            index -= index & -index;
        }
        return result;
    }

    sumRange(left, right) {
        return this.queryBIT(right) - (left > 0 ? this.queryBIT(left - 1) : 0);
    }
}
