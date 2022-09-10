/*
125. Single Number
https://leetcode.com/problems/single-number/

The result of XORing all numbers will be equal to the only number appearing once in the list.
*/

const singleNumber = nums => nums.reduce((acc, num) => acc ^= num, 0);
