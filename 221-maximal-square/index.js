/*
* 221. Maximal Square
* https://leetcode.com/problems/maximal-square/
*
*/

const maximalSquare = matrix => {
    let max = 0;
    if (matrix.some(row => +row[0] === 1)) max = 1;
    else if (matrix[0].some(cell => +cell === 1)) max = 1;

    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            let base = Math.min(
                +matrix[row - 1][col],
                +matrix[row][col - 1],
                +matrix[row - 1][col - 1]
            );
            matrix[row][col] = +matrix[row][col] === 1 ? (base + 1) : 0;
            max = Math.max(max, matrix[row][col]);
        }
    }

    return max ** 2;
};
