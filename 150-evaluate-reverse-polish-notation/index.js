/*
* 150. Evaluate Reverse Polish Notation
* https://leetcdode.com/problems/evaluate-reverse-polish-notation
*
* The key thing to notice about RPN is that there are always exactly
* two values in an operation. This means that we can use a single
* stack to calculate everything.
*
* We have to use Math.trunc to get rid of the decimal, not Math.floor.
* Math.floor will fail for negative results.
*
*/

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
};

const evalRPN = tokens => {
    const stack = [];

    for (let token of tokens) {
        if (ops[token]) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};
