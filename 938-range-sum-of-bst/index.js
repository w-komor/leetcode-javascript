/*
* 938. Range Sum of BST
* https://leetcode.com/problems/range-sum-of-bst/
*
* We can traverse the tree in any order we like (preorder, inorder, postorder).
* At each step we add the value of the current node to the sum if it is in the range.
* We also recurisvely add the range sum of the left and right subtrees.
*
*/

const rangeSumBST = (node, low, high) => {
    if (!node) return 0;

    const thisValue = node.val >= low && node.val <= high ? node.val : 0;

    return thisValue
        + rangeSumBST(node.right, low, high)
        + rangeSumBST(node.left, low, high);
};
