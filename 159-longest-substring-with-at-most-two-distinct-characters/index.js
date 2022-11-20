/*
* 159. Longest substring with at most two distinct characters
* https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
*/

const lengthOfLongestSubstringTwoDistinct = s => {
    let max = 0,
        curr = 0,
        first,
        second,
        firstCount = 0;
    
    for (let char of s) {
        curr = (char === first || char === second) ? curr + 1 : firstCount + 1;
        firstCount = (char === first) ? firstCount + 1 : 1;
        if (char !== first) {
            second = first;
            first = char;
        }
        max = Math.max(curr, max);
    }
    
    return max;
};
