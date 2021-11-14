/*
739. Daily Temperatures
https://leetcode.com/problems/daily-temperatures/

1. Create an array - we will use it as a monotonic stack for INDEXES of temperatures.
2. Iterate over the temperatures array T. At each iteration remove all lower
   temperatures from the end of the stack and update the result array
3. For all indexes that remain in the stack, the result will be 0.

Other possible improvements:
1. We could modify the array in-place instead of creating a result array. This is more
   memory-efficient, but mutates the input.
2. When creating the result array, we could fill it with 0. This would eliminate the need
   for the second 'for' loop, but would be less efficient.
*/

const dailyTemperatures = T => {
    const result = new Array(T.length);
    const stack = [];

    for (let i = 0; i < T.length; i++) {
        while (T[stack[stack.length - 1]] < T[i]) {
            result[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }

    for (let i of stack) {
        result[i] = 0;
    }

    return result;
};
