/*
* 191. Number of 1 Bits
* https://leetcode.com/problems/number-of-1-bits/
*
*/

const hammingWeight = n => n.toString(2).split('0').join('').length;
