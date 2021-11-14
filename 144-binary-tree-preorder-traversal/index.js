/*
144. Binary Tree Preorder Traversal
https://leetcode.com/problems/binary-tree-inorder-traversal/

One-line solution using array destructuring
*/

const preorderTraversal = n => n ? [n.val, ...preorderTraversal(n.left), ...preorderTraversal(n.right)] : [];
