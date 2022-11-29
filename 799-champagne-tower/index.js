/*
* 799. Champagne Tower
* https://leetcode.com/problems/champagne-tower/
*
* We pour everything at once to the topmost glass and then let it
* flow down, row by row, until we encounter the target row.
*/

const champagneTower = (n, targetRow, targetGlass) => {
    let currentRow = [n];

    for (let row = 0; row <= targetRow; row++) {
        const nextRow = new Array(row + 2).fill(0);
        for (let glass = 0; glass <= row; glass++) {
            if (currentRow[glass] > 1) {
                nextRow[glass] += (currentRow[glass] - 1) / 2;
                nextRow[glass + 1] += (currentRow[glass] - 1) / 2;
                currentRow[glass] = 1;
            }
        }
        if (targetRow !== row) {
            currentRow = nextRow;
        }
    }

    return currentRow[targetGlass];
};
