/*
* 996. Number of Squareful Arrays
* https://leetcode.com/problems/number-of-squareful-arrays/
*
*/

let n, a, res;

const numSquarefulPerms = (A) => {
    a = A;
    n = a.length;
    a.sort((x, y) => x - y);
    res = 0;

    let cur = [],
        used = new Set();

    dfs(cur, used);

    return res;
};

const dfs = (cur, used) => {
    if (cur.length == n) {
        res++;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (used.has(i)) {
            continue;
        }
        if (i > 0 && !used.has(i - 1) && a[i] == a[i - 1]) {
            continue;
        }
        if (cur.length && !isSqaure(cur[cur.length - 1] + a[i])) {
            continue;
        }

        cur.push(a[i]);
        used.add(i);

        dfs(cur, used);

        used.delete(i);
        cur.pop();
    }
};

const isSqaure = x => {
    let sq = Math.sqrt(x);
    return sq == sq >> 0;
};
