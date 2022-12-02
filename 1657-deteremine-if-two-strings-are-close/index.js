/*
* 1657. Determine if Two Strings Are Close
* https://leetcode.com/problems/determine-if-two-strings-are-close/
*
*/

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = char => this.map[char] ? this.map[char] ++ : this.map[char] = 1;
    keys = () => Object.keys(this.map).sort((a, b) => a.localeCompare(b));
    values = () => Object.values(this.map).sort((a, b) => a - b);
}

const closeStrings = (word1, word2) => {
    const freq1 = new FreqMap(word1),
        freq2 = new FreqMap(word2),
        keys1 = freq1.keys(),
        keys2 = freq2.keys(),
        values1 = freq1.values(),
        values2 = freq2.values(),
        keysAreTheSame = !keys1.some((char, i) => char !== keys2[i]),
        valuesAreTheSame = !values1.some((val, i) => val !== values2[i]);
    return keysAreTheSame && valuesAreTheSame;
};
