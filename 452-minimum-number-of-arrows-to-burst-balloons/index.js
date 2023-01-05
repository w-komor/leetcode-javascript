/*
* 452. Minimum Number of Arrows to Burst Balloons
* https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
*
*/

const sortPoints = points => points.sort((a, b) => {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;
    const startDiff = aStart - bStart;
    if (startDiff !== 0) {
        return startDiff;
    } else {
        return aEnd - bEnd;
    }
});

const findMinArrowShots = points => {
    sortPoints(points);
    let result = 1,
        currentEnd = points[0][1];

    for (let i = 0; i < points.length; i++) {
        const [start, end] = points[i];
        if (start > currentEnd) {
            result++;
            currentEnd = end;
        } else if (end < currentEnd) {
            currentEnd = end;
        }
    }

    return result;
};
