/*
* 324. Wiggle Sort II
* https://leetcode.com/problems/wiggle-sort-ii/
*
* 1. Find the median of the array. We can do this using
*    the quick select algorithm.
* 2. Reorder the array such that elements less than the median come
*    before elements greater than the median.
*    This step doesn't sort the array but partitions it around the median.
* 3. Reorder the array in wiggle sort order.
*/

var wiggleSort = function(nums) {
    const n = nums.length;
    const median = findKthLargest(nums, Math.floor((n + 1) / 2));
    
    let left = 0, i = 0, right = n - 1;

    while (i <= right) {
        if (nums[newIndex(i, n)] > median) {
            [nums[newIndex(left, n)], nums[newIndex(i, n)]] = [nums[newIndex(i, n)], nums[newIndex(left, n)]];
            left++;
            i++;
        } else if (nums[newIndex(i, n)] < median) {
            [nums[newIndex(right, n)], nums[newIndex(i, n)]] = [nums[newIndex(i, n)], nums[newIndex(right, n)]];
            right--;
        } else {
            i++;
        }
    }
};

function findKthLargest(nums, k) {
    let left = 0, right = nums.length - 1;
    while (true) {
        const pos = partition(nums, left, right);
        if (pos === k - 1) {
            return nums[pos];
        } else if (pos < k - 1) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}

function newIndex(index, n) {
    return (1 + 2 * index) % (n | 1);
}