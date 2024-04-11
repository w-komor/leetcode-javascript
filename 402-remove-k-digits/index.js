/*
* 402. Remove K Digits
*
* - use a stack
* - for each number:
*      - pop all larger numbers while k > 0
*      - push the current number
* - while k > 0, keep popping
* - remove leading zeroes
*
*/

const removeKdigits = (num, k) => {
    if (k === num.length) {
        return '0';
    }

    const stack = [],
        digits = num.split('').map(Number);

    for (const digit of digits) {
        while (stack[stack.length - 1] > digit && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    const result = stack.join('').replace(/^0+/, '');
    return result ? result : '0';
};