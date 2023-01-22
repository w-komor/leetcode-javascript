/*
* 25. Reverse Nodes in k-Group
* https://leetcode.com/problems/reverse-nodes-in-k-group/
*
*/

const reverseKGroup = (head, k) => {
    let hat = new ListNode(-1),
        temp = hat;
    const stack = [];
    
    while (head) {
        for (let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }
        
        if (stack.length === k) {
            while (stack.length > 0) {
                temp.next = stack.pop();
                temp = temp.next;
            }
            temp.next = head;
        }
    }

    return hat.next;
};
