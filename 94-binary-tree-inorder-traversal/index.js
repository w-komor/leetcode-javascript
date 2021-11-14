/*
94. Binary Tree Inorder Traversal
https://leetcode.com/problems/binary-tree-inorder-traversal/

One-line solution using array destructuring
*/

const inorderTraversal = n => n ? [...inorderTraversal(n.left), n.val, ...inorderTraversal(n.right)] : [];
