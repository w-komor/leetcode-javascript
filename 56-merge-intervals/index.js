/*
* 56. Merge Intervals
* https://leetcode.com/problems/merge-intervals
*
*/

const merge = intervals => {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);

    const results = [intervals[0]];
    for (let [start, end] of intervals) {
        const prevEnd = results[results.length - 1][1]
        if (start <= prevEnd) {
            results[results.length - 1][1] = Math.max(end, prevEnd);
        } else {
            results.push([start, end]);
        }
    }

    return results;
};
