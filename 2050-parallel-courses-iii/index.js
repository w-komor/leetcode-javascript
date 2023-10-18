/*
* 2050. Parallel Courses III
* https://leetcode.com/problems/parallel-courses-iii
*
*/

const minimumTime = (n, relations, time) => {
    // Create a graph
    const adjList = new Array(n).fill(null).map(() => []);
    const inDegree = new Array(n).fill(0);

    for (let [u, v] of relations) {
        adjList[u - 1].push(v - 1);
        inDegree[v - 1]++;
    }

    // nodes with no prerequisites.
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Distance/time to complete each course, considering prerequisites.
    const dist = [...time];

    // Perform a topological sort and calculate distances.
    while (queue.length) {
        const u = queue.shift();

        for (const v of adjList[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
            // Consider the maximum time to start the next course.
            dist[v] = Math.max(dist[v], dist[u] + time[v]);
        }
    }

    // answer is the maximum distance/time among all courses.
    return Math.max(...dist);
};