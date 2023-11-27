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