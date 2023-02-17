/*
* 783. Minimum Distance between BST Nodes
* https://leetcode.com/problems/minimum-distance-between-bst-nodes
*
*/

const inorder = node => node
    ? [...inorder(node.left), node.val, ...inorder(node.right)]
    : [];

const minDiffInBST = root => {
    const vals = inorder(root);
    let min = Infinity;

    for (let i = 1; i < vals.length; i++) {
        min = Math.min(min, Math.abs(vals[i] - vals[i - 1]));
    }

    return min;
};
