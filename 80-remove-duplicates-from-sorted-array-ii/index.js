/*
* 80. Remove Duplicates from Sorted Array II
* https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
*
*/

const removeDuplicates = nums => {
    let i = 0;
    for (let num of nums) {
        if (i < 2 || num > nums[i - 2]) {
            nums[i] = num;
            i++;
        }
    }
    return i;
};
