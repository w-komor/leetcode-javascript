/*

35. Search Insert Position
https://leetcode.com/problems/search-insert-position/

In a standard binary search, we would just:
    return left;
but we are searching for an insert position, so we do:
    return nums[left] < target ? left + 1 : left;

As for the binary search, there are 3 invariants:
- left is always small enough to be the answer
- right can never be the answer because it's too big
- mid is always different from left and right because we are checking that (right - left > 1)
This guarantees that we will arrive at the solution and we won't have an infinite loop.

*/

const searchInsert = (nums, target) => {
    let left = 0, right = nums.length;
    
    while (right - left > 1) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) right = mid;
        if (nums[mid] <= target) left = mid;
    }

    return nums[left] < target ? left + 1 : left;
};
