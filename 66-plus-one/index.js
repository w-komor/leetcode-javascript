/*
*
* 66. Plus One
* https://leetcode.com/problems/plus-one/
*
*/

const plusOne = digits => {
    let pointer = digits.length - 1;

    while (digits[pointer] === 9 && pointer >= 0) {
        digits[pointer] = 0;
        pointer--;
    }
    
    if (pointer === -1) {
        digits.unshift(1);
    } else {
        digits[pointer] = digits[pointer] + 1;
    }
    
    return digits;
};