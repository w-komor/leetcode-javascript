/*
* 201. Bitwise AND of Numbers Range
* https://leetcode.com/problems/bitwise-and-of-numbers-range/
*
*/

const rangeBitwiseAnd = (left, right) => {
    let trailingZeros = 0;

    while (left !== right) {
        left >>= 1;
        right >>= 1;
        count++;
    }

    return left << trailingZeros;
};