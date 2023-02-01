/*
* 1071. Greatest Common Divisor of Strings
* https://leetcode.com/problems/greatest-common-divisor-of-strings/
*
*/

const gcd = (x, y) => x === 0 ? y : gcd(y % x, x);

const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return '';
    return str1.slice(0, gcd(str1.length, str2.length));
};
