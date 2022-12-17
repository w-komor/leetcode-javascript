/*
* 34. Find First and Last Position of Element in Sorted Array
* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*
*/

const searchRange = (nums, target) => {
    let low = 0,
        high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        (nums[mid] >= target) ? high = mid - 1 : low = mid + 1;
    }
    
    if (nums[low] !== target) {
        return [-1, -1];
    }
    
    const start = low;
    low = 0;
    high = nums.length-1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        (nums[mid] <= target) ? low = mid + 1 : high = mid - 1;
    }

    return [start, high];
};
