/*
 * 973. K Closest Points to Origin
 * https://leetcode.com/problems/k-closest-points-to-origin/
 *
 * This could also be solved with a priority queue (heap), or with a quickselect algorithm.
 * 
 * */

const kClosest = (points, k) => {
    points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2);
    return points.splice(0, k);
};
