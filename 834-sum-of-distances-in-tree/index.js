/*
* 834. Sum of Distances in Tree
* https://leetcode.com/problems/sum-of-distances-in-tree/
*
*/

const sumOfDistancesInTree = (n, edges) => {
    let adj = new Array(n);
    for (let i = 0; i < n; i++) adj[i] = new Array();
    for (let e of edges) {
        adj[e[0]].push(e[1]);
        adj[e[1]].push(e[0]);
    }

    // count[i] is the number of nodes in the subtree rooted at i
    // result[i] is the sum of distances from i to all nodes in the graph
    let count = new Array(n).fill(1),
        result = new Array(n).fill(0);

    // With preorder traversal, we find:
    // - the number of nodes in each subtree
    // - the sum for each subtree (we can hold that in result)
    const dfsCount = (node, parent) => {
        for (let child of adj[node]){
            if (child === parent) continue;
            dfsCount(child, node);
            count[node] += count[child];
            result[node] += result[child] + count[child];
        }
    }

    // With postorder traversal, we calculate the result using previously obtained values
    const dfsSum = (node, parent) => {
        for (let child of adj[node]) {
            if (child === parent) continue;
            result[child] = n - count[child] + result[node] - count[child];
            dfsSum(child, node);
        }
    }

    dfsCount(0, -1);
    dfsSum(0, -1);

    return result;
};
