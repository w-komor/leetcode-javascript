/*
* 330. Patching Array
* https://leetcode.com/problems/patching-array/
*
*/

const minPatches = (nums, n) => {
    let m = nums.length,
        missing = 1,
        count = 0,
        i = 0;

    while (missing <= n) {
        if (i < m && nums[i] <= missing) {
            missing += nums[i];
            i++;
        } else {
            missing += missing;
            count++;
        }
    }

    return count;
};
