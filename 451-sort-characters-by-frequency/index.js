/*
* 451. Sort characters by frequency
* https://leetcode.com/problems/sort-characters-by-frequency
*
*/

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = char => this.map[char] ? this.map[char]++ : this.map[char] = 1;
}

const frequencySort = s => {
    const freq = new FreqMap(s).map;
    const fn = (a, b) => (freq[a] === freq[b]) ? a.localeCompare(b) : freq[b] - freq[a];
    return s.split('').sort(fn).join('');
};
