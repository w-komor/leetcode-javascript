/*
* 59. Spiral Matrix II
* https://leetcode.com/problems/spiral-matrix-ii
*
*/

const generateMatrix = n => {
    const res = new Array(n).fill(null).map(_ => new Array(n).fill(0));
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        range = [n, n - 1];
    let dir = 0,
        row = 0,
        col = -1,
        val = 1;

    while (range[dir % 2] > 0) {
        for (let i = 0; i < range[dir % 2]; i++) {
            row += dirs[dir][0];
            col += dirs[dir][1];
            res[row][col] = val++;
        }
        range[dir % 2]--;
        dir = (dir + 1) % 4;
    }

    return res;
};
