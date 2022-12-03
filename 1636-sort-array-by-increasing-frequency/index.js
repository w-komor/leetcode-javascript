/*
* 1636. Sort Array by Increasing Frequency
* https://leetcode.com/problems/sort-array-by-increasing-frequency
*
*/

class FreqMap {
    constructor(arr) {
        this.map = {};
        arr.forEach(this.add);
    }

    add = n => this.map[n] ? this.map[n]++ : this.map[n] = 1;
}

const frequencySort = s => {
    const freq = new FreqMap(s).map;
    const fn = (a, b) => (freq[a] === freq[b]) ? b - a : freq[a] - freq[b];
    return s.sort(fn);
};
