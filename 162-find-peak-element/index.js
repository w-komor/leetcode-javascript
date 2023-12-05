/*
* 162. Find Peak Element
* https://leetcode.com/problems/find-peak-element
*
*/

const findPeakElement = nums => {
    let start = 0,
        end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
};