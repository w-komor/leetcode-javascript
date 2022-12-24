/*
* 79. Word Search
* https://leetcode.com/problems/word-search
*
*/

const isValidStart = (board, row, col, word) => {
    if (row < 0 || row >= board.length) return false;
    if (col < 0 || col >= board[0].length) return false;
    if (board[row][col] !== word[0]) return false;
    return true;
}

const dfs = (board, row, col, word) => {
    if (!isValidStart(board, row, col, word)) return false;
    const suffix = word.slice(1);
    if (suffix === '') return true;

    const char = board[row][col];
    board[row][col] = '0';

    const result = dfs(board, row - 1, col, suffix)
        || dfs(board, row, col - 1, suffix)
        || dfs(board, row + 1, col, suffix)
        || dfs(board, row, col + 1, suffix);

    board[row][col] = char;

    return result;
};

const exist = (board, word) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (dfs(board, row, col, word)) return true;
        }
    }
    return false;
};
