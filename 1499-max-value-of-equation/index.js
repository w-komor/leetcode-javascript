/*
* 1499. Max Value of Equation
* https://leetcode.com/problems/max-value-of-equation/
*
*/

const findMaxValueOfEquation = (points, k) => {
    let maxVal = -Infinity,
        deque = [];

    for (let j = 0; j < points.length; j++) {
        // Remove points out of the k range
        while (deque.length > 0 && points[j][0] - points[deque[0]][0] > k) {
            deque.shift();
        }

        // Calculate potential max value using the front of the deque
        if (deque.length > 0) {
            maxVal = Math.max(
                maxVal,
                points[j][0] + points[j][1] + points[deque[0]][1] - points[deque[0]][0]
            );
        }

        // Remove points from the back of the deque that are not useful anymore
        while (
            deque.length > 0
            && (points[j][1] - points[j][0]) >= (points[deque[deque.length - 1]][1] - points[deque[deque.length - 1]][0])
        ) {
            deque.pop();
        }

        // Add the current point to the deque
        deque.push(j);
    }

    return maxVal;
};