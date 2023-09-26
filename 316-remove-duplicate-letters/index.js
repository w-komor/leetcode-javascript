/*
 * 316. Remove Duplicate Letters
 * https://leetcode.com/problems/remove-duplicate-letters/
 *
 */

const val = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

const removeDuplicateLetters = s => {
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