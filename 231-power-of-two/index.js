/*
* 231. Power of Two
* https://leetcode.com/problems/power-of-two/
*
*/

const isPowerOfTwo = n => n <= 0 ? false : (n & (n - 1)) === 0;
