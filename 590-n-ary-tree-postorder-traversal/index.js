/*
* 590. N-ary Tree Postorder Traversal
* https://leetcode.com/problems/n-ary-tree-postorder-traversal/
*
*/

const postorder = root => {
    const fn = (acc, node) => [...acc, ...postorder(node)];
    return root ? [...root.children.reduce(fn, []), root.val] : [];
};
