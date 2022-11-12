/*

11. Container With Most Water
https://leetcode.com/problems/container-with-most-water

Initialize two pointers at the ends of 'heights' array. Initialize 'maxarea'. At each step:
1. Move the pointer with the smaller height by one position.
    (Moving the pointer with the larger height would not increase the area of the rectangle.
    This does not mean that the pointer will remain fixed until the end. We may find an even
    higher line when moving the other pointer).
2. Update maxarea

*/

const maxArea = height => {
    let left = 0,
        right = height.length - 1,
        maxarea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxarea = Math.max(area, maxarea);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maxarea;
};
