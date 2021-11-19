/*
461. Hamming Distance
https://leetcode.com/problems/hamming-distance/

1. Use XOR to get all bits which are different in x and y. In JavaScript, the bitwise XOR operator is ^
2. Count the number of 1s in the result and return it

In JavaScript, numbers are represented as 64-bit floating point values, but are converted to 32-bit integers
before and after binary operations. The problem constraints tell us that 1 < x < 2^31 and 1 < x < 2^31, so we
won't run into any overflow problems.
*/

const hammingDistance = (x, y) => (x ^ y).toString(2).match(/1/g).length;

// Alternative solution without regular expressions
const hammingDistance = (x, y) => (x ^ y).toString(2).split('').filter(b => b !== '0').length;
