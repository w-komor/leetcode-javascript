/*
* 212. Word Search II
* https://leetcode.com/problems/word-search-ii
*
*/

class Trie {
    constructor() {
        this.root = { char: null };
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) node[char] = { char };
            node = node[char];
        }
        node.word = word;
    }
}

const isValidStart = (board, row, col, trieNode) => {
    if (row < 0 || row >= board.length) return false;
    if (col < 0 || col >= board[0].length) return false;
    if (!trieNode[board[row][col]]) return false;
    return true;
}

const dfs = (board, row, col, trieNode, results) => {
    if (!isValidStart(board, row, col, trieNode)) return false;
    const node = trieNode[board[row][col]];
    if (node.word) results.add(node.word);

    const char = board[row][col];
    board[row][col] = '0';

    dfs(board, row - 1, col, node, results);
    dfs(board, row, col - 1, node, results);
    dfs(board, row + 1, col, node, results);
    dfs(board, row, col + 1, node, results);

    board[row][col] = char;
};

const findWords = (board, words) => {
    const trie = new Trie(),
        results = new Set();
    words.forEach(word => trie.insert(word));

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (dfs(board, row, col, trie.root, results)) return true;
        }
    }

    return Array.from(results.values());
};
