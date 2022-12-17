/*
* 33. Search in Rotated Sorted Array
* https://leetcode.com/problems/search-in-rotated-sorted-array/
*
*/

const search = (nums, target) => {
    let high = nums.length - 1,
        low = 0;
    
    while (high - low > 1) {
        const mid = Math.floor((high + low) / 2);
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

    if (nums[high] === target) {
        return high;
    } else if (nums[high - 1] === target) {
        return high - 1;
    } else {
        return -1;
    }
};
