/*
* 17. Letter Combinations of a Phone Number
* https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*
*/

const map = [
    '', '', 'abc', 'def',
    'ghi', 'jkl', 'mno',
    'pqrs', 'tuv', 'wxyz'
];
map.forEach((_, index) => map[index] = map[index].split(''));

const letterCombinations = (digits, result = [], prefix = '') => {
    if (!digits) return [];
    if (prefix.length === digits.length) {
        result.push(prefix);
        return;
    }

    const digit = +digits[prefix.length];
    for (const char of map[digit]) {
        letterCombinations(digits, result, prefix + char);
    }

    return result;
};
