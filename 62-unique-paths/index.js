/*
62. Unique Paths
https://leetcode.com/problems/unique-paths/

Let say we are at [row, column] = [r, c]. There are two possibilites:
1. If we are in the last row or in the last column, there is 1 possible path. P(r, c) = 1;
2. In all other cases, we calculate the possible paths recursively: P(r, c) = P(r + 1, c) + P(r, c + 1).

We memoize the result for each coordinate to achieve O(m x n) time complexity.
*/

const countUniquePaths = (r, c, rows, cols, memo) => {
    const hash = `${r}.${c}`;
    if (memo.get(hash)) return memo.get(hash);

    const downPossible = r + 1 < rows;
    const rightPossible = c + 1 < cols;

    let result = 1;
    if (downPossible && rightPossible) {
        result = countUniquePaths(r + 1, c, rows, cols, memo) + countUniquePaths(r, c + 1, rows, cols, memo);
    }

    memo.set(hash, result);
    return memo.get(hash);
};

const uniquePaths = (m, n) => {
    if (m === 1 || n === 1) return 1;
    const memo = new Map();
    return countUniquePaths(0, 0, m, n, memo);
};
