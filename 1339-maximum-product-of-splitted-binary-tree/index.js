/*
* 1339. Maximum Product of Splitted Binary Tree
* https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
*
* Let the sum of all nodes of the binary tree be 'a'.
* We are looking for a subtree with sum closest to a/2. Proof:
* if b,c > 0 and b < c, then:
* (a+b)(a-b) = a^2 - b^2 > a^2 - c^2 = (a+c)(a-c)
*
*/

const mod = val => val % (10 ** 9 + 7);

const maxProduct = (head) => {
    // calculate sum for each subtree
    const sums = new Map();
    function getSum(node) {
        if (!node) return 0;
        if (sums.has(node)) return sums.get(node);
        const sum = node.val + getSum(node.right) + getSum(node.left);
        sums.set(node, sum);
        return sum;
    }
    const total = getSum(head);

    // delete head because it cannot be the split point
    sums.delete(head);

    // Find the subtree with sum closest to total/2
    let bestSum = 0,
        result = 0;
    Array.from(sums.values()).forEach(sum => {
        if (Math.abs(total / 2 - sum) < Math.abs(total / 2 - bestSum)) {
            bestSum = sum;
            result = sum * (total - sum);
        }
    });

    return mod(result);
};
