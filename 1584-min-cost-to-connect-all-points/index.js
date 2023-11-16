/*
* 1584. Min Cost to Connect All Points
* https://leetcode.com/problems/min-cost-to-connect-all-points/
*

This is a weighted graph and we are looking for the minimum spanning tree.
There are two algorithms that can be used to find the minimum spanning tree:

- Prim's algorithm
    - start with the vertex with the lowest weight
    - from all accessible edges, add the one with the lowest weight
    - use a priority queue to keep track of the lowest weight edge

- Kruskal's algorithm
    - sort all edges by weight
    - start with the edge with the lowest weight
    - if the edge connects two different components, add it to the tree
    - use union-find to keep track of the components

The below solution uses Prim's algorithm.

*/

const minCostConnectPoints = points => {
    let sum = 0;
    const n = points.length;
    const minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
    const visited = new Set([JSON.stringify(points[0])]);
    
    // add edges accessible to the first element
    for (let i = 1; i < n; i++) {
        const item = [getDistance(points[0], points[i]), points[i]];
        minHeap.enqueue([getDistance(points[0], points[i]), points[i]]);
    }
    
    while (visited.size < n) {
        // always choose the lowest-cost accessible element
        const [cost, point] = minHeap.dequeue().element;
        
        if (visited.has(JSON.stringify(point))) continue;
        
        visited.add(JSON.stringify(point));
        sum += cost;

        // add new accessible points to minHeap
        for (let i = 0; i < n; i++) {
            const distance = getDistance(point, points[i]);
            if (visited.has(JSON.stringify(points[i]))) continue;
            if (distance === 0) continue;
            minHeap.enqueue([distance, points[i]]);
        }
    }
    
    return sum;
};
    
const getDistance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);