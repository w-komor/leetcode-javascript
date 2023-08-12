/*
* 828. Count Unique Characters of All Substrings of a Given String
* https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
*
*/

const uniqueLetterString = s => {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = [];
        hash[s[i]].push(i);
    }

    let result = 0;
    for (let char in hash) {
        const arr = hash[char];
        for (let i = 0; i < arr.length; i++) {
            const leftStart = i - 1 >= 0 ? (arr[i - 1] + 1) : 0;
            const leftPartLength = arr[i] - leftStart + 1;
            const rightEnd = i + 1 < arr.length ? (arr[i + 1] - 1) : s.length - 1;
            const rightPartLength = rightEnd - arr[i] + 1;
            result += leftPartLength * rightPartLength;
        }
    }
    return result;
};
