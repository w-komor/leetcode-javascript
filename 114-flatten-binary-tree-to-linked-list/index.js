/*
* 114. Flatten Binary Tree to Linked List
* https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
*
* We want the linked list in the order of preOrder,
* but we will use postOrder traversal to achieve that.
*
* We keep track of the prev visited node - this will be the next node in the linked list.
*
*/

const flatten = root => {
    let prev = null;

    const postOrderDFS = node => {
        if (node === null) return;

        postOrderDFS(node.right);
        postOrderDFS(node.left);

        node.left = null;
        node.right = prev;
        prev = node;
    }
    
    postOrderDFS(root);
};
