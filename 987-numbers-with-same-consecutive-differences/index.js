/*
* 987. Numbers with Same Consecutive Differences
* https://leetcode.com/problems/numbers-with-same-consecutive-differences/
*
*/

const numsSameConsecDiff = (n, k) => {
    const results = [],
        path = [];

    backtrack = path => {
        if (path.length === n) {
            results.push(path.join(''));
            return;
        }

        const last = path[path.length - 1];
        const min = last - k;
        const max = k === 0 ? Infinity : last + k;

        if (min >= 0) {
            path.push(min);
            backtrack(path);
            path.pop();
        }

        if (max <= 9) {
            path.push(max);
            backtrack(path);
            path.pop();
        }
    }

    for (let i = 1; i < 10; i++) {
        path.push(i);
        backtrack(path);
        path.pop();
    }

    return results;
};