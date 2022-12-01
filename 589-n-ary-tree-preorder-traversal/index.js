/*
* 589. N-ary Tree Preorder Traversal
* https://leetcode.com/problems/n-ary-tree-preorder-traversal/
*
*/

const preorder = root => {
    const fn = (acc, node) => [...acc, ...preorder(node)];
    return root ? [root.val, ...root.children.reduce(fn, [])] : [];
};
