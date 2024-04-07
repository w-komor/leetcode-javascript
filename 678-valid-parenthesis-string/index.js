/*
* 678. Valid Parenthesis String
* https://leetcode.com/problems/valid-parenthesis-string/
*
*/

const checkValidString = s => {
    let minBalance = 0,
        maxBalance = 0;
    
    const balanceMaps = {
        '(': (min, max) => ([min + 1, max + 1]),
        ')': (min, max) => ([min - 1, max - 1]),
        '*': (min, max) => ([min - 1, max + 1])
    };

    for (const char of s.split('')) {
        [minBalance, maxBalance] = balanceMaps[char](minBalance, maxBalance);
        minBalance = Math.max(0, minBalance);
        if (maxBalance < 0) return false;
    }

    return minBalance === 0;
};