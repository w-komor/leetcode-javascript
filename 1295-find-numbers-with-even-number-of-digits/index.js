/*
*
* 1295. Find Numbers with Even Number of Digits
* https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
*
*/

const findNumbers = nums => nums.reduce((acc, num) => acc + ((num.toString().length % 2 === 0) ? 1 : 0), 0);
