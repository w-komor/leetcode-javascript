/*
* 387. First Unique Character in a String
* https://leetcode.com/problems/first-unique-character-in-a-string/
*
*/

const firstUniqChar = s => {
    const freq = {};
    s.split('').forEach(c => freq[c] = freq[c] ? freq[c] + 1 : 1);
    Object.keys(freq)
        .filter(c => freq[c] !== 1)
        .forEach(c => delete freq[c]);
    
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) return i;
    }
    
    return -1;
};
