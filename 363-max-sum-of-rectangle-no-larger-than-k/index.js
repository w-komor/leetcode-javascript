/*
 * 363. Max Sum of Rectangle No Larger Than K
 * https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/
 *
 */

const maxSumSubmatrix = (m, k) => {
    let max = -Infinity, rows = m.length, cols = m[0].length;
    
    for (let l = 0; l < cols; l++) {
        let sums = Array(rows).fill(0);
        for (let r = l; r < cols; r++) {
            for (let row = 0; row < rows; row++) sums[row] += m[row][r];
            for (let i = 0; i < rows; i++) {
                let sum = 0;
                for (let j = i; j < rows; j++) {
                    sum += sums[j];
                    if (sum > max && sum <= k) max = sum;
                }
            }
        }
    }

    return max;
}