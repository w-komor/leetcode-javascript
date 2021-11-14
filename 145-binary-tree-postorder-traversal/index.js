/*
145. Binary Tree Postorder Traversal
https://leetcode.com/problems/binary-tree-postorder-traversal/

One-line solution using array destructuring
*/

const postorderTraversal = n => n ? [...postorderTraversal(n.left), ...postorderTraversal(n.right), n.val] : [];
