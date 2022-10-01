/*

61. Rotate List
https://leetcode.com/problems/rotate-list

1. Make the list into a 'ring'. Simultaneously, count the number of elements
2. Break the ring after traversing (n - (k % n)) % n nodes

*/

const rotateRight = (head, k) => {
    if (!head) {
        return null;
    }

    let curr = head;
    let n = 1;
    while (curr.next) {
        curr = curr.next;
        n++;
    }
    curr.next = head;

    let steps = (n - (k % n)) % n;
    for (let i = 0; i < steps; i++) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null;

    return newHead;
};
