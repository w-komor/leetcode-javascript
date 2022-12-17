/*
* 36. Valid Sudoku
* https://leetcode.com/problems/valid-sudoku/
*
*/

const rowValid = (board, rowIndex) => {
    const nums = new Set();

    for (let num of board[rowIndex]) {
        if (num === '.') continue;
        if (nums.has(num)) {
            return false;
        }
        nums.add(num)
    }

    return true;
};

const colValid = (board, colIndex) => {
    const nums = new Set();

    for (let row = 0; row < board.length; row++) {
        if (board[row][colIndex] === '.') continue;
        if (nums.has(board[row][colIndex])) {
            return false;
        }
        nums.add(board[row][colIndex]);
    }

    return true;
};

const squareValid = (board, squareIndex) => {
    const center = {
        row: Math.floor(squareIndex / 3) * 3 + 1,
        col: (squareIndex % 3) * 3 + 1
    };
    const nums = new Set();

    for (let drow = -1; drow <= 1; drow++) {
        for (let dcol = -1; dcol <= 1; dcol++) {
            const row = center.row + drow;
            const col = center.col + dcol;
            if (board[row][col] !== '.') {
                if (nums.has(board[row][col])) {
                    return false;
                }
                nums.add(board[row][col]);
            }
        }
    }

    return true;
};

const isValidSudoku = board => {
    for (let i = 0; i < 9; i++) {
        if (!rowValid(board, i)) return false;
        if (!colValid(board, i)) return false;
        if (!squareValid(board, i)) return false;
    }

    return true;
};
