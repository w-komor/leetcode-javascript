/*
* 54. Spiral Matrix
* https://leetcode.com/problems/spiral-matrix
*
*/

const spiralOrder = matrix => {
    const res = [],
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        range = [matrix[0].length, matrix.length - 1];
    let dir = 0,
        row = 0,
        col = -1;

    while (range[dir % 2] > 0) {
        for (let i = 0; i < range[dir % 2]; i++) {
            row += dirs[dir][0];
            col += dirs[dir][1];
            res.push(matrix[row][col]);
        }
        range[dir % 2]--;
        dir = (dir + 1) % 4;
    }

    return res;
};
