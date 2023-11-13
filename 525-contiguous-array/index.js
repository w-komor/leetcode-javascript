/*
* 525. Contiguous Array
* https://leetcode.com/problems/contiguous-array/
*
*/

const findMaxLength = nums => {
    const hashMap = { 0: -1 };
    let sum = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 1 ? 1 : -1;
        if (hashMap[sum] === undefined) {
            hashMap[sum] = i;
        } else {
            max = Math.max(max, i - hashMap[sum]);
        }
    }

    return max; 
};