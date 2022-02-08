/*

389. Find the Difference
https://leetcode.com/problems/find-the-difference/

Solution one:
1. Build frequency map for both string
2. Find the character with differing frequence

Solution two:
1. Sum char codes for both strings
2. Convert the difference to string

*/

/*
Solution one:
*/
const createFreqMap = s => {
    const map = {};
    s.split('').forEach(c => map[c] ? map[c]++ : map[c] = 1);
    return map;
}

const findTheDifference = (s, t) => {
    const sFreq = createFreqMap(s);
    const tFreq = createFreqMap(t);
    return Object.keys(tFreq).find(c => sFreq[c] !== tFreq[c]);
};



/*
Solution two:
*/
const codeSum = s => s.split('')
    .map(char => char.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

const findTheDifference = (s, t) => String.fromCharCode(codeSum(t) - codeSum(s));
