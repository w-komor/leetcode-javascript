/*
* 876. Middle of the Linked List
* https://leetcode.com/problems/middle-of-the-linked-list/
*
*/

const middleNode = head => {
    let mid = head;
    
    while (head && head.next) {
        mid = mid.next;
        head = head.next.next;
    }

    return mid;
};
