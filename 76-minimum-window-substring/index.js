/*
 *
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring
 * 
 * Typical solution for a substring/subarray problem: frequency map + two pointers
 */

class FreqMap {
    constructor(str) {
        this.map = {};
        str.split('').forEach(this.add);
    }

    add = (char) => this.map[char] ? this.map[char]++ : this.map[char] = 1;
    remove = (char) => this.map[char] ? this.map[char]-- : this.map[char] = 0;
}

const minWindow = (s, t) => {
    const targetFreq = new FreqMap(t);
    const currentFreq = new FreqMap('');

    // keeping track of how many letters have to be fulfilled
    // and how many are currently fulfilled:
    let target = Object.keys(targetFreq.map).length,
        current = 0;

    // sliding window - we will increase left if target === current
    // and increase right if current < target
    let left = 0,
        right = -1;

    // keeping track of the minimum window found so far.
    let min = Infinity,
        minLeft = 0,
        minRight = -1;

    function updateMin() {
        let length = right - left + 1;
        if (current !== target) return;
        if (length < min) [min, minLeft, minRight] = [length, left, right];
    }

    function increaseWindow() {
        right++;
        const char = s[right];
        currentFreq.add(char);
        if (currentFreq.map[char] === targetFreq.map[char]) {
            current++;
        }
        updateMin();
    }

    function decreaseWindow() {
        const char = s[left];
        currentFreq.remove(char);
        if (currentFreq.map[char] + 1 === targetFreq.map[char]) {
            current--;
        }
        left++;
        updateMin();
    }

    while (right < s.length) {
        current === target ? decreaseWindow() : increaseWindow();
    }
    
    return s.slice(minLeft, minRight + 1);
};