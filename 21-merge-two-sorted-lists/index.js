/*

21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/

Iteratively add elements to the new list. At each step, go to the next
element in the linked list which currently has the smaller element.

*/

const mergeTwoLists = (l1, l2) => {
    const head = new ListNode(null);
    let curr = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return head.next;
};
