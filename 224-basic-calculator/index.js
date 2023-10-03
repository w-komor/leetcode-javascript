/*
* 224. Basic Calculator
* https://leetcode.com/problems/basic-calculator/
*
* Given a string s representing an expression, implement a basic calculator to evaluate it.
*
* Approach:
* - Use a stack to keep track of different levels of parentheses.
* - Use two variables to keep track of current number and sign.
* - We can ignore spaces. Just continue.
* - For digits, we do num = num * 10 + parseInt(char)
* - For plus and minus, update last element in stack and reset num and sign.
* - For left parentheses, push sign and num to stack and reset num and sign.
* - For right parentheses, pop sign and num from stack and update last element in stack. Reset num and sign.
*/

const calculate = s => {
    const digits = new Set('0123456789'.split(''));
    const stack = [0];
    let num = 0,
        sign = 1;
    
    for (const char of s) {
        if (char === ' ') {
            continue;
        } else if (digits.has(char)) {
            num = num * 10 + parseInt(char, 10);
        } else if (char === '+') {
            stack[stack.length - 1] += num * sign;
            num = 0;
            sign = 1;
        } else if (char === '-') {
            stack[stack.length - 1] += num * sign;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            stack.push(sign, num);
            num = 0;
            sign = 1;
        } else if (char === ')') {
            const lastNum = (stack.pop() + num * sign) * stack.pop();
            stack[stack.length - 1] += lastNum;
            num = 0;
            sign = 1;
        }
    }

    return stack[stack.length - 1] + num * sign;
}