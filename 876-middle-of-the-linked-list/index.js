/*
* 876. Middle of the Linked List
* https://leetcode.com/problems/middle-of-the-linked-list/
*
*/

const middleNode = head => {
    let full = head, half = head;
    
    while (full && full.next) {
        half = half.next;
        full = full.next.next;
    }

    return half;
};
