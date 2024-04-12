/*
* 42. Trapping Rain Water
* https://leetcode.com/problems/trapping-rain-water/
*
*/

const trap = height => {
    let leftMax = -1,
        rightMax = -1,
        left = 0,
        right = height.length - 1,
        result = 0;
    
    while (left <= right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax;
        rightMax = height[right] > rightMax? height[right] : rightMax;
        if (leftMax > rightMax) {
            result += rightMax - height[right];
            right--;
        } else {
            result += leftMax - height[left];
            left++
        }
    }

    return result;
};