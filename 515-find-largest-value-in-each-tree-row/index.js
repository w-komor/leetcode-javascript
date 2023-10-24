/*
* 515. Find Largest Value in Each Tree Row
* https://leetcode.com/problems/find-largest-value-in-each-tree-row
*
*/

var largestValues = function(root) {
    const result = [];
    let queue = [root];
    
    while (queue.length) {
        let max = -Infinity;
        const nodes = queue.filter(n => n),
            newQueue = [];
        for (const node of nodes) {
            max = Math.max(max, node.val);
            newQueue.push(node.left);
            newQueue.push(node.right);
        }
        queue = [...newQueue];
        if (nodes.length) {
            result.push(max);
        }
    }

    return result;
};