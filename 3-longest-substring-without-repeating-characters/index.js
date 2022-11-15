/*

3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters

*/

const lengthOfLongestSubstring = s => {
    let start = 0,
        end = 0,
        max = 0,
        previousIndex = {};
    
    while (end < s.length) {
        const char = s.charAt(end);
        if (previousIndex[char] >= start) {
            start = previousIndex[char] + 1;
        }
        previousIndex[char] = end;
        max = Math.max(end - start + 1, max);
        end++;
    }
    
    return max;
};
