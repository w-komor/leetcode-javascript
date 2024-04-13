/*
* 85. Maximal Rectangle
* https://leetcode.com/problems/maximal-rectangle/
*
*/

const maximalRectangle = matrix => {
    const width = new Array(matrix.length).fill(0);
    let max = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            width[j] = (matrix[j][i] === '1') ? width[j] + 1 : 0;
        }
    
        for (let k = 0; k < matrix.length; k++) {
            let height1 = k - 1;
            while (height1 >= 0 && width[height1] >= width[k]) height1--;
    
            let height2 = k + 1;
            while (height2 < matrix.length && width[height2] >= width[k]) height2++;
    
            max = Math.max(max, width[k] * (height2 - height1 - 1));
        }
    }

    return max;
};