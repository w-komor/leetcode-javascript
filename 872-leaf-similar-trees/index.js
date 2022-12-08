/*
* 872. Leaf-Similar Trees
* https://leetcode.com/problems/leaf-similar-trees/
*
* To get the array of leaf values, we do in-order traversal of the tree. We add a value to an array
* only if it is a leaf node. A leaf node has no left and no right children.
*
*/

const values = node => {
    if (!node) return [];
    if (!node.left && !node.right) return [node.val];
    return [...values(node.left), ...values(node.right)];
}

const leafSimilar = (root1, root2) => JSON.stringify(values(root1)) === JSON.stringify(values(root2));
