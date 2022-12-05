/*
* 2190. Most Frequency Number Following Key in an Array
* https://leetcode.com/problems/most-frequent-number-following-key-in-an-array
*
*/

const mostFrequent = (nums, key) => {
    const freq = {};

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            freq[nums[i]] ? freq[nums[i]]++ : freq[nums[i]] = 1;
        }
    }

    let maxFreq = 0,
        max = 0;
    
    for (let [number, frequency] of Object.entries(freq)) {
        if (frequency > maxFreq) {
            maxFreq = frequency;
            max = number;
        }
    }

    return max;
};
