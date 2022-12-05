/*
* 2186. Minimum Number of Steps to Make Two String Anagram II
* https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii
*
*/

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = char => this.map[char] ? this.map[char] ++ : this.map[char] = 1;
}

const minSteps = (s, t) => {
    let sFreq = new FreqMap(s).map,
        tFreq = new FreqMap(t).map,
        steps = 0;

    let allChars = new Set([
        ...Object.keys(sFreq),
        ...Object.keys(tFreq)
    ]).entries();

    for (let [char, key] of allChars) {
        let sq = sFreq[char] || 0, tq = tFreq[char] || 0;
        steps += Math.abs(sq - tq);
    }

    return steps;
};
