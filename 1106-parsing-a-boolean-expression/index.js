/*
* 1106. Parsing a Boolean Expression
* https://leetcode.com/problems/parsing-a-boolean-expression/
*
*/

const parseBoolExpr = expression => {
    const stack = []; 

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === ')') {
            const seen = new Set();
            while (stack.at(-1) !== '(') {
                seen.add(stack.pop());
            }
            stack.pop();
            const operator = stack.pop();
            if (operator === '&') {
                stack.push(seen.has('f') ? 'f' : 't');
            } else if (operator === '|') {
                stack.push(seen.has('t') ? 't' : 'f');
            } else {
                stack.push(seen.has('t') ? 'f' : 't');
            }
        } else if (char !== ',') {
            stack.push(char);
        }
    }

    return stack.pop() === 't';
};