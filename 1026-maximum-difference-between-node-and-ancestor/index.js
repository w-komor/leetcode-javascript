/*
* 1026. Maximum Difference Between Node and Ancestor
* https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
*
*/

const maxAncestorDiff = (node, min = null, max = null) => {
    if (!node) return 0;

    min = min === null ? node.val : Math.min(min, node.val);
    max = max === null ? node.val : Math.max(max, node.val);

    if (node.left || node.right) {
        return Math.max(
            maxAncestorDiff(node.right, min, max),
            maxAncestorDiff(node.left, min, max)
        )
    } else {
        return Math.abs(max - min);
    }
};
