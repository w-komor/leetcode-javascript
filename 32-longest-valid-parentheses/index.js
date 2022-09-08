/*

35. Longest Valid Parentheses
https://leetcode.com/problems/longest-valid-parentheses/

Use two pointers
    - 'left' denotes the number of ( in the current potentially valid substring
    - 'right' denotes the number of ) in the current potentially valid substring

Make a forward pass and a backward pass. Whenever right > left for the forward pass,
or left > right for the backward pass, reset the counters to 0.

*/

const longestValidParentheses = s => {
    let left = 0, right = 0, max = 0;
    
    const reset = () => left = right = 0;
    const calc = char => char === '(' ? left++ : right++;

    for (let i = 0; i < s.length; i++) {
        calc(s[i]);
        if (left === right) max = Math.max(max, left + right);
            else if (right > left) reset();
    }
    
    reset();
    
    for (let i = s.length - 1; i >= 0; i--) {
        calc(s[i]);
        if (left === right)  max = Math.max(max, left + right);
            else if (left > right) reset();
    }
    
    return max;
};
