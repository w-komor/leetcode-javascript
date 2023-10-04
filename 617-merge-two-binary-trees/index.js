/*
 * 617. Merge Two Binary Trees
 * https://leetcode.com/problems/merge-two-binary-trees/
 *
 */

const mergeTrees = (root1, root2) => {
    if (!root1 || !root2) return root1 || root2

    let node = new TreeNode(root1.val + root2.val);
    
    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);

    return node;
};