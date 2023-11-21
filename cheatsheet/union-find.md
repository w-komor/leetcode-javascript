# Union find

## Efficient Union Find
Normal Union find can be improved by introducing two improvements:
- path compression
- union by rank

## Initialization

- Each element starts in its own set, represented as a tree with just one node.
- Each node initially points to itself (its own parent), and the rank (or depth) of each tree is initialized to 0.


## Find with Path Compression:

The find function locates the root of the tree for an element. While finding the root, it performs path compression, meaning it attaches each visited node directly to the root. This step significantly improves efficiency by flattening the tree.

## Union by Rank:

The union function merges two sets. It uses the rank to determine which tree becomes a subtree of the other. The tree with the lower rank is attached to the tree with the higher rank. If both trees have the same rank, one becomes the subtree of the other, and the rank of the new root is increased by 1.

```javascript
class UnionFind {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, i) => i);
        this.rank = new Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return; // already in the same set

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootY] < this.rank[rootX]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
        }
    }
}
```