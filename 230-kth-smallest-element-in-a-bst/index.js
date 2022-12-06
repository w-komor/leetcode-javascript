/*
* 230. Kth Smallest Element in a BST
* https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*
*/

const inOrder = node => node ? [...inOrder(node.right), node.val, ...inOrder(node.left)] : [];

const kthSmallest = (root, k) => {
    const sortedValues = inOrder(root);
    console.log(sortedValues);
    return sortedValues[sortedValues.length - k];
};
