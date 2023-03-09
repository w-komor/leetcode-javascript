/*
* 142. Linked List Cycle II
* https://leetcode.com/problems/linked-list-cycle-ii
*
*/

const detectCycle = head => {
    let fast = head,
        slow = head,
        prev = null;

    while (fast && fast.next) {
        prev = prev === null ? head : prev.next;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return prev;
    }

    return null;
};
