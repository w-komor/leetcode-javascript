/*
 * 542. 01 Matrix
 * https://leetcode.com/problems/01-matrix/
 * 
 */

const updateMatrix = M => {

    for (let row = 0; row < M.length; row++) {
        for (let col = 0; col < M[0].length; col++) {
            const top = (row > 0) ? M[row - 1][col] : Infinity;
            const left = (col > 0) ? M[row][col - 1] : Infinity;
            const neighborDist = Math.min(top, left) + 1;
            M[row][col] = M[row][col] === 0 ? 0 : neighborDist;
        }
    }

    for (let row = M.length - 1; row >= 0; row--) {
        for (let col = M[0].length - 1; col >= 0; col--) {
            const bottom = (row < M.length - 1) ? M[row + 1][col] : Infinity;
            const right = (col < M[0].length - 1) ? M[row][col + 1] : Infinity;
            const neighborDist = Math.min(bottom, right) + 1;
            M[row][col] = Math.min(M[row][col], neighborDist);
        }
    }

    return M;
};