/*
* 73. Set Matrix Zeroes
* https://leetcode.com/problems/set-matrix-zeroes/
*
*/

const setZeroes = matrix => {
    const row0 = new Set(),
        col0 = new Set(),
        rows = matrix.length,
        cols = matrix[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 0) {
                row0.add(row);
                col0.add(col);
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row0.has(row) || col0.has(col)) {
                matrix[row][col] = 0;
            }
        }
    }
};
