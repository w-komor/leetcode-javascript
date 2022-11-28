/*
* 217. Contains Duplicate
* https://leetcode.com/problems/contains-duplicate/
*
*/

const containsDuplicate = nums => {
    let freq = {};

    for (let num of nums) {
        if (freq[num]) {
            return true;
        }
        freq[num] = true;
    }

    return false;
};
