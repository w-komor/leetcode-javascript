/*
* 236. Lowest Common Ancestor of a Binary Tree
* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
*
*/

const lowestCommonAncestor = (root, p, q) => {
    if (!root || root.val === p.val || root.val === q.val) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    } else {
        return left || right;
    }
};