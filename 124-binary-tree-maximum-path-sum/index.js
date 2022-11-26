/*
* 124. Binary Tree Maximum Path Sum
* https://leetcode.com/problems/binary-tree-maximum-path-sum
*
*/

const maxPathSum = root => {
    let max = -Infinity;

    const postOrderDFS = node => {
        if (!node) {
            return 0;
        }

        const maxLeft = Math.max(postOrderDFS(node.left), 0)
        const maxRight = Math.max(postOrderDFS(node.right), 0)

        max = Math.max(max, maxLeft + maxRight + node.val);

        return Math.max(
            maxLeft + node.val,
            maxRight + node.val
        );
    }

    postOrderDFS(root);

    return max;
};