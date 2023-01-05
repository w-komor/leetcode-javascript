/*
* 139. Word Break
* https://leetcode.com/problems/word-break/
*
* To be efficient:
* - we have to build a trie from wordDict
* - we need to memoize results (if checked from index i, we don't need to check again)
*/

const buildTrie = words => {
    const root = {};

    for (const word of words) {
        const letters = word.split('');
        let node = root;
        for (let i = 0; i < letters.length; i++) {
            const l = letters[i];
            if (!node[l]) node[l] = {};
            if (i === letters.length - 1) node[l].word = word;
            node = node[l];
        }
    }

    return root;
}

const dfs = (s, index, trie, visited) => {
    if (visited[index]) return;
    if (index === s.length) return true;
    visited[index] = true;

    let node = trie,
        i = index;
    const ends = new Set();
    while (node[s[i]] && i < s.length) {
        node = node[s[i]];
        if (node.word) ends.add(index + node.word.length);
        i++;
    }

    return Array.from(ends).some(end => dfs(s, end, trie, visited));
};

const wordBreak = (s, wordDict) => {
    const trie = buildTrie(wordDict),
        visited = {};
    return dfs(s, 0, trie, visited);
};
