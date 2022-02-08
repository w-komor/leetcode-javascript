/*

389. Find the Difference
https://leetcode.com/problems/find-the-difference/

1. Build frequency map for both string
2. Find the character with differing frequence

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
