/*
*
* 74. Search a 2D Matrix
* https://leetcode.com/problems/search-a-2d-matrix/
*
* - create a function to access nth smallest element in the matrix
* - after that, just use binary search as if it was a one-dimensional array
*
*/

const nth = (matrix, index) => {
    let row = Math.floor(index / matrix[0].length);
    let col = index % matrix[0].length;
    return matrix[row] ? matrix[row][col] : undefined;
};

const searchMatrix = (matrix, target) => {
    let total = matrix.length * matrix[0].length,
        left = 0,
        right = total - 1;

    if (nth(matrix, left) === target || nth(matrix, right) === target) {
        return true;
    }
    
    while (right - left > 1) {
        const mid = Math.floor((right + left) / 2);
        const val = nth(matrix, mid);
        if (val > target) {
            right = mid;
        } else if (val < target) {
            left = mid;
        } else {
            return true;
        }
    }

    return false;
};
