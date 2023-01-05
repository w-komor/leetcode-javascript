/*
* 140. Word Break II
* https://leetcode.com/problems/word-break-ii
*
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

const dfs = (s, index, trie, visited, results, prefix) => {
    if (visited[index + prefix]) return;
    if (index === s.length) {
        if (prefix[prefix.length - 1] === ' ') prefix = prefix.slice(0, prefix.length - 1);
        results.add(prefix);
    }
    visited[index + prefix] = true;

    let node = trie,
        i = index;
    const words = new Set();
    while (node[s[i]] && i < s.length) {
        node = node[s[i]];
        if (node.word) words.add(node.word);
        i++;
    }

    Array.from(words).forEach(
        word => dfs(s, index + word.length, trie, visited, results, prefix + word + ' ')
    );
};

const wordBreak = (s, wordDict) => {
    const trie = buildTrie(wordDict),
        visited = {},
        results = new Set();

    dfs(s, 0, trie, visited, results, '');

    return Array.from(results);
};
