/*
* 19. Remove Nth Node From End of List
* https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*
*/

const removeNthFromEnd = (head, n) => {
    let [slow, fast] = [head, head];
    while (n--) fast = fast.next;
    while (fast && fast.next) [fast, slow] = [fast.next, slow.next];
    fast ? slow.next = slow.next.next : head = head.next;
    return head;
};
