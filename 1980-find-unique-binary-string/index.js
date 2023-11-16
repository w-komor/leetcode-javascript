/*
* 1980. Find Unique Binary String
* https://leetcode.com/problems/find-unique-binary-string/
*
*/

const findDifferentBinaryString = nums => nums
    .map((num, i) => num[i] === '0' ? '1' : '0')
    .join('');