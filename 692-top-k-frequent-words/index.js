/*
* 692. Top k Frequent Words
* https://leetcode.com/problems/top-k-frequent-words
*
*/

class FreqMap {
    constructor(words = []) {
        this.map = {};
        for (let word of words) {
            this.add(word);
        }
    }

    add = n => this.map[n] ? this.map[n]++ : this.map[n] = 1;
}

const topKFrequent = (words, k) => {
    const freq = new FreqMap(words).map;
    const unique = Object.keys(freq).sort((a, b) => {
        if (freq[b] > freq[a]) {
            return 1;
        } else if (freq[b] < freq[a]) {
            return -1;
        } else return a.localeCompare(b);
    });
    return unique.slice(0, k);
};
