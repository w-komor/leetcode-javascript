/*
448. Find All Numbers Disappeared in an Array
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

To solve in constant space:
    1. Iterate over the array. For each number, make array[(Math.abs(number) - 1)] negative if it's not already.
       Now, for each index in the array, if array[index] is negative, that means 'index' is present in the array.
    2. Return (index + 1) for each positive number in array.
*/

const findDisappearedNumbers = nums => {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = Math.abs(nums[index]) * (-1);
    }
    return nums.map((n, i) => n > 0 ? i + 1 : 0).filter(n => n !== 0);
};
