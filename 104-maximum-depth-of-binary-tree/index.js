/*
* 104. Maximum Depth of Binary Tree
* https://leetcode.com/problems/maximum-depth-of-binary-tree/
*
*/

const maxDepth = (node, stepsSoFar = 1) => node ? Math.max(
    maxDepth(node.left, stepsSoFar + 1),
    maxDepth(node.right, stepsSoFar + 1)
) : (stepsSoFar - 1);