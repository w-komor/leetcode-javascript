/*
* 328. Odd Even Linked List
* https://leetcode.com/problems/odd-even-linked-list/
*
*/

const oddEvenList = head => {
    if (!(head && head.next)) {
        return head;
    }
    let odd = head,
        even = head.next
        lastEven = head.next;
  
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
  
    odd.next = lastEven;
    return head;
};
