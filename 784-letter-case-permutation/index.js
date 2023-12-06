/*
* 784. Letter Case Permutation
* https://leetcode.com/problems/letter-case-permutation/
*
*/

var letterCasePermutation = function(s) {
    let results = [];
    
    function backtrack(i, str) {
        if (i === s.length) {
            results.push(str);
            return;
        }
        
        if (s[i].toLowerCase() !== s[i].toUpperCase()) {
            backtrack(i + 1, str + s[i].toLowerCase());
            backtrack(i + 1, str + s[i].toUpperCase());
        } else {
            backtrack(i + 1, str + s[i]);
        }
    }

    backtrack(0, '');

    return results;
};