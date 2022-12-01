/*
* 438. Find All Anagrams in a String
* https://leetcode.com/problems/find-all-anagrams-in-a-string/
*
* Frequency maps + sliding window
* At each step, keep track of how many characters have the right frequency in the current window.
*
*/

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = char => this.map[char] ? this.map[char]++ : this.map[char] = 1;
    delete = char => this.map[char] ? this.map[char]-- : this.map[char] = 0;
}

const findAnagrams = (s, p) => {
    let targetFreq = new FreqMap(p),
        freq = new FreqMap(''),
        target = Object.keys(targetFreq.map).length,
        current = 0,
        result = [];
        lastUnwanted = -1;
    
    const currentChange = (char, added) => {
        const freqChange = added ? 1 : -1;
        if (freq.map[char] === targetFreq.map[char]) {
            return 1;
        } else if (freq.map[char] - freqChange === targetFreq.map[char]) {
            return -1;
        } else {
            return 0;
        }
    }
    
    function update(added, removed) {
        if (added === removed) return;
        freq.add(added);
        current += currentChange(added, true);
        if (!removed) return;
        freq.delete(removed);
        current += currentChange(removed, false);
    }

    for (let i = 0; i < s.length; i++) {
        if (!targetFreq.map[s[i]]) {
            freq = new FreqMap('');
            current = 0;
            lastUnwanted = i;
            continue;
        }
        const start = i - p.length + 1;
        const removed = start - 1 > lastUnwanted ? s[start - 1] : undefined;
        update(s[i], removed);
        if (current === target) result.push(start);
    }

    return result;
};
