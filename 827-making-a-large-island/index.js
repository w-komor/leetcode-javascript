/*
* 827. Making a Large Island
* https://leetcode.com/problems/making-a-large-island
*
*/

const largestIsland = grid => {
    const n = grid.length;
    const uf = new UnionFind(n * n);

    const getIndex = (x, y) => x * n + y;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Union adjacent islands
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            for (let [dx, dy] of directions) {
                const ni = i + dx, nj = j + dy;
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 1) {
                    uf.union(getIndex(i, j), getIndex(ni, nj));
                }
            }
        }
    }

    // Find largest island after a change
    let maxSize = 0;
    let hasZero = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                continue;
            }
            hasZero = true;
            let sizeWithChange = 1;
            let connectedRoots = new Set();
            for (let [dx, dy] of directions) {
                const ni = i + dx, nj = j + dy;
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 1) {
                    const root = uf.find(getIndex(ni, nj));
                    if (!connectedRoots.has(root)) {
                        sizeWithChange += uf.getSize(root);
                        connectedRoots.add(root);
                    }
                }
            }
            maxSize = Math.max(maxSize, sizeWithChange);
        }
    }

    // If there are no 0s, return the size of the grid
    return hasZero ? maxSize : n * n;
};