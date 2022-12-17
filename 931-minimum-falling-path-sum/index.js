/*
* 931. Minimum Falling Path Sum
* https://leetcode.com/problems/minimum-falling-path-sum
*
* DP Approach:
* Starting from the second row, we calculate the minimum cost to reach the current cell.
* Answer will be the minimum of all values in the last row in the resulting matrix.
*/

const minFallingPathSum = matrix => {
    if (matrix.length === 1) {
        return matrix[0][0];
    }
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let sum = matrix[row - 1][col];
            if (col !== 0) sum = Math.min(sum, matrix[row - 1][col - 1]);
            if (col !== matrix[0].length - 1) sum = Math.min(sum, matrix[row - 1][col + 1]);
            matrix[row][col] += sum;
        }
    }

    return Math.min(...matrix[matrix.length - 1]);
};
