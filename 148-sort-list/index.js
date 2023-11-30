/*
* 148. Sort List
* https://leetcode.com/problems/sort-list/
*
*/

// Using merge sort on a linked list

var sortList = function(head) {
    if (head === null || head.next === null) return head;
    const [left, right] = split(head);
    const root = new ListNode(null);
    return merge(root, sortList(left), sortList(right))
};

function split(node) {
    let slow = node;
    let fast = node;
    // use fast & slow pointer to find the middle
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    const left = node;
    const right = slow.next;
    // break off the list so that `left` doesn't link to `right`
    slow.next = null;
    
    return [left, right];
}

function merge(root, left, right) {
    let pointer = root;
    /**
     * merge the smaller node in the `left` and `right` list first.
     * return the second node in the list because the first is a 
     * temparary node.
     */
    while (left !== null || right !== null) {
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        pointer = pointer.next;
    }

    return root.next;
}