/*
* 530. Minimum Absolute Difference in BST
* https://leetcode.com/problems/minimum-absolute-difference-in-bst
*
*/

const inorder = node => node
    ? [...inorder(node.left), node.val, ...inorder(node.right)]
    : [];

const getMinimumDifference = root => {
    const vals = inorder(root);
    let min = Infinity;

    for (let i = 1; i < vals.length; i++) {
        min = Math.min(min, Math.abs(vals[i] - vals[i - 1]));
    }

    return min;
};
