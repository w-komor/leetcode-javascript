/*
* 116. Populating Next Right Pointers in Each Node
* https://leetcode.com/problems/populating-next-right-pointers-in-each-node
*
*/

const connect = (root, right = null) => {
    if (!root) return root;
    
    root.next = right;
    connect(root.left, root.right);
    connect(root.right, right ? right.left : null);
    
    return root;
};
