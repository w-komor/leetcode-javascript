/*
* 225. Implement Stack using Queues
* https://leetcode.com/problems/implement-stack-using-queues/
*
*/

class MyStack {
    constructor() {
        this.a = [];
    }
    push = x => this.a.push(x);
    pop = () => this.a.pop();
    top = x => this.a[this.a.length - 1];
    empty = () => this.a.length === 0;
};
