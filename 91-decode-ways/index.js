/*
* 91. Decode Ways
* https://leetcode.com/problems/decode-ways
*
*/

const numDecodings = (s, memo = {}) => {
    if (s[0] === '0') return 0;
    if (s.length < 2) return 1;
    if (memo[s]) return memo[s];
    const oneChar = numDecodings(s.slice(1), memo);
    const twoChar = parseInt(s.slice(0, 2)) < 27 ? numDecodings(s.slice(2), memo) : 0;
    return memo[s] = oneChar + twoChar;
};
