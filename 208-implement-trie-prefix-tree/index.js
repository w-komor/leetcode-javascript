/*
* 208. Implement Trie (Prefix Tree)
* https://leetcode.com/problems/implement-trie-prefix-tree
*
*/

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.valid = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) return false;
            node = node[char];
        }
        return node.valid || false;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node[char]) return false;
            node = node[char];
        }
        return Boolean(node);
    }
}
