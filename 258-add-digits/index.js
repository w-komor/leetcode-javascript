/*

258. Add Digits
https://leetcode.com/problems/add-digits/

The answer cycles from 1-9

*/

const addDigits = num => {
    if (num === 0) {
        return 0;
    }
    const mod = num % 9;
    return mod === 0 ? 9 : mod;
};