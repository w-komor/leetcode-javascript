/*
* 84. Largest Rectangle in Histogram
* https://leetcode.com/problems/largest-rectangle-in-histogram/
*
*/

const largestRectangleArea = heights => {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0];

    heights.forEach((height, index) => {
        while (stack && heights[stack[stack.length - 1]] > height) {
            const top = stack.pop();
            maxArea = Math.max(
                (index - stack[stack.length - 1] - 1) * heights[top],
                maxArea
            );
        }
        stack.push(index);
    });

    return maxArea;
};
