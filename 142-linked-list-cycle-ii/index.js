/*
* 142. Linked List Cycle II
* https://leetcode.com/problems/linked-list-cycle-ii
*
*/

var detectCycle = function(head){
    let slow = head,
        fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow !== fast) continue;
        slow = head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

    return null;
}
