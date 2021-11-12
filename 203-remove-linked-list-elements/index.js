/*
203. Remove Linked List Elements
https://leetcode.com/problems/remove-linked-list-elements/

There are two places in which we can encounter the target value:
    1. At the head. In this case, we can just shift the head of the linked list.
    2. Not at the head. In this case, we can remove it: current.next = current.next.next
*/

const removeElements = (head, val) => {
    // shift the head as long as it has the target value
    while (head && head.val === val) {
        head = head.next;
    }

	// remove nodes with the target value inside the linked list
    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
