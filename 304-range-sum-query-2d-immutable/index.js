/*
* 304. Range Sum Query 2D - Immutable
* https://leetcode.com/problems/range-sum-query-2d-immutable/
*
*/

class NumMatrix {
    constructor(matrix) {
        if (!matrix.length || !matrix[0].length) return;
        const rows = matrix.length;
        const cols = matrix[0].length;
        this.prefix = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.prefix[i + 1][j + 1] = matrix[i][j] 
                    + this.prefix[i][j + 1] 
                    + this.prefix[i + 1][j] 
                    - this.prefix[i][j];
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        return this.prefix[row2 + 1][col2 + 1] 
            - this.prefix[row2 + 1][col1] 
            - this.prefix[row1][col2 + 1] 
            + this.prefix[row1][col1];
    }
}