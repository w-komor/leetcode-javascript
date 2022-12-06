/*
* 14. Longest Common Prefix
* https://leetcode.com/problems/longest-common-prefix/
*
*/

const longestCommonPrefix = strs => {
    let index = 0;

    indexLoop: while (index <= strs[0].length) {
        let current = strs[0][index];
        for (let str of strs) {
            if (str[index] !== current) break indexLoop;
        }
        index++;
    }
    
    return strs[0].slice(0, index);
};
