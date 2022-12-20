/*
* 81. Search in Rotated Sorted Array II
* https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
*
*/

const search = (nums, target) => {
    let high = nums.length - 1,
        low = 0;
    
    while (high - low > 1) {
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] === nums[high]) {
            high--;
            continue;
        }
        const curr = (target < nums[0]) === (nums[mid] < nums[0])
            ? nums[mid]
            : target < nums[mid] ? -Infinity : Infinity;
        if (curr < target) {
            low = mid;
        } else if (curr > target) {
            high = mid;
        } else {
            return mid;
        }
    }

    if (nums[high] === target || nums[high - 1] === target) {
        return true;
    } else {
        return false;
    }
};
