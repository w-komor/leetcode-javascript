/*
* 1081. Smallest Subsequence of Distinct Characters
* https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
*
*/

const val = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

const smallestSubsequence = s => {
    const stack = [],
        visited = new Set(),
        count = new Array(26).fill(0);
    
    for (let char of s) count[val(char)]++;

    for (let char of s) {
        count[val(char)]--;
        if (visited.has(char)) continue;

        while (
            stack.length
            && char < stack[stack.length - 1]
            && count[val(stack[stack.length - 1])] > 0
        ) {
            visited.delete(stack.pop());
        }

        visited.add(char);
        stack.push(char);
    }

    return stack.join('');
};