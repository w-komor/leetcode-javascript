/*
* 2256. Minimum Average Difference
* https://leetcode.com/problems/minimum-average-difference
*
*/

const minimumAverageDifference = nums => {
    let toLeft = new Array(nums.length).fill(0),
        toRight = new Array(nums.length).fill(0),
        min = Infinity,
        minIndex,
        sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        toLeft[i] = Math.floor(sum / (i + 1));
    }

    sum = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        sum += nums[i + 1];
        toRight[i] = Math.floor(sum / (nums.length - i - 1));
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = Math.abs(toLeft[i] - toRight[i]);
        if (diff < min) {
            min = diff;
            minIndex = i;
        }
    }

    return minIndex;
};
