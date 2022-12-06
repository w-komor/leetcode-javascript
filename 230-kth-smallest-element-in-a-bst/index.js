/*
* 230. Kth Smallest Element in a BST
* https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*
* In-order traversal of a BST yields the elements in non-decreasing order.
* We just return the kth smallest element of the in-order traversal.
*
*/

const inOrder = node => node ? [...inOrder(node.right), node.val, ...inOrder(node.left)] : [];

const kthSmallest = (root, k) => {
    const sortedValues = inOrder(root);
    return sortedValues[sortedValues.length - k];
};
