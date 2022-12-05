/*
* 1347. Minimum Number of Steps to Make Two Strings Anagram
* https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
*
*/

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = char => this.map[char] ? this.map[char] ++ : this.map[char] = 1;
    delete = char => this.map[char] > 0 ? this.map[char]-- : this.map[char] = 0;
}

const minSteps = (s, t) => {
    let sFreq = new FreqMap(s);
    t.split('').forEach(sFreq.delete);
    return Object.values(sFreq.map).reduce((a, b) => a + b, 0);
};
