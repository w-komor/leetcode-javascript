/*
* 338. Counting Bits
* https://leetcode.com/problems/counting-bits/
*
*/

const countBits = n => new Array(n + 1)
    .fill(0)
    .map((_, i) => i.toString(2).split('0').join('').length);
