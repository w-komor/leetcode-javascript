/*
* 347. Top k Frequent Elements
* https://leetcode.com/problems/top-k-frequent-elements
*
*/

class FreqMap {
    constructor(nums = []) {
        this.map = {};
        for (let num of nums) {
            this.add(num);
        }
    }

    add = n => this.map[n] ? this.map[n]++ : this.map[n] = 1;
}

const topKFrequent = (nums, k) => {
    const freq = new FreqMap(nums).map;
    const unique = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    return unique.slice(0, k);
};
