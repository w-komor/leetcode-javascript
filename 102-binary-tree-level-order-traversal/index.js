/*
* 102. Binary Tree Level Order Traversal
* https://leetcode.com/problems/binary-tree-level-order-traversal/
*
*/

const levelOrder = root => {
    if (!root) return [];
    let q = [root], result = [];

    while (q.length) {
        let values = [...q.filter(n => n).map(n => n.val)];
        if (values.length > 0) {
            result.push(values);
        }
        let newQ = [];
        for (let node of q) {
            if (node) {
                newQ.push(node.left);
                newQ.push(node.right);
            }
        }
        q = newQ;
    }

    return result;
};
