/*
* 222. Count Complete Tree Nodes
* https://leetcode.com/problems/count-complete-tree-nodes
*
*/

const countNodes = n => n ? (1 + countNodes(n.left) + countNodes(n.right)) : 0;