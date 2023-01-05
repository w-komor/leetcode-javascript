/*
* 141. Linked List Cycle
* https://leetcode.com/problems/linked-list-cycle
*
*/

const hasCycle = head => {
    let fast = head,
        slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};
