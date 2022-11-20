/*
* 23. Merge K Sorted Lists
* https://leetcode.com/problems/merge-k-sorted-lists
*
* - We can merge two lists in linear time.
* - We can perform a 'merge sort' on the linked lists, for O(n log k).
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

const mergeKLists = lists => {
    let amount = lists.length;
    let interval = 1;

    while (interval < amount) {
        for (let i = 0; i < amount - interval; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }

    return amount > 0 ? lists[0] : null;
}
