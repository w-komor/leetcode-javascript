/*
* 1361. Validate Binary Tree Nodes
* https://leetcode.com/problems/validate-binary-tree-nodes/
*
*/

/*

To determine whether the nodes form exactly one valid binary tree, we need to check three conditions:

- There is exactly one root:
In a valid binary tree, there should be exactly one node that is not a child of any other node.

- There are no cycles

- The entire graph is connected:
starting from the root, you can reach every node.

*/

const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
    const seen = new Array(n).fill(false);
    const parentCount = new Array(n).fill(0);
    
    // If node has more than one parent,
    // then there are cross edges in the graph, meaning not a valid tree.
    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            parentCount[leftChild[i]]++;
            if (parentCount[leftChild[i]] > 1) return false;
        }
        if (rightChild[i] !== -1) {
            parentCount[rightChild[i]]++;
            if (parentCount[rightChild[i]] > 1) return false;
        }
    }
    
    // valid tree has one root.
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (parentCount[i] === 0) {
            if (root === -1) {
                root = i;
            } else {
                return false;
            }
        }
    }
    
    if (root === -1) return false;

    const dfs = (node) => {
        if (node === -1 || seen[node]) return;
        seen[node] = true;
        dfs(leftChild[node]);
        dfs(rightChild[node]);
    };
    
    dfs(root);

    // Valid tree is connected - all nodes are reachable
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            return false;
        }
    }
    
    return true;
};