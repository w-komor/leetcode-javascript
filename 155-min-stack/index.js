/*
* 155. Min Stack
* https://leetcode.com/problems/min-stack/
*
* The trick is to keep two values for each element in the stack:
* - the value of the item
* - the min encountered so far
* And then the global min will always be part of the top element of the stack.
*/

class MinStack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push({
            value,
            min: this.stack.length === 0 ? value : Math.min(value, this.getMin())
        });
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].value;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}