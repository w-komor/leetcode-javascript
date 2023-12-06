/*
* 399. Evaluate Division
* https://leetcode.com/problems/evaluate-division/
*
*
* - Build a graph where each variable is a node.
* - For each equation, add directed edges between the nodes with the appropriate weights.
* - For each query, use DFS or BFS to find a path between the nodes.
* - Calculate the product of the weights along the path to get the answer for the query.
* - If no path exists, return -1.0 for that query.
*/

const calcEquation = (equations, values, queries) => {
    const graph = buildGraph(equations, values);

    return queries.map(query => {
        const [start, end] = query;
        return hasPathDFS(start, end, graph, new Set());
    });
};

const buildGraph = (equations, values) => {
    const graph = {};
    equations.forEach(([numerator, denominator], index) => {
        if (!graph[numerator]) graph[numerator] = {};
        if (!graph[denominator]) graph[denominator] = {};
        graph[numerator][denominator] = values[index];
        graph[denominator][numerator] = 1 / values[index];
    });
    return graph;
};

const hasPathDFS = (start, end, graph, visited) => {
    // Undefined variables
    if (!graph[start] || !graph[end]) return -1.0;

    // Direct connection
    if (graph[start][end] !== undefined) return graph[start][end];

    visited.add(start);

    for (let neighbor in graph[start]) {
        if (!visited.has(neighbor)) {
            const productWeight = hasPathDFS(neighbor, end, graph, visited);
            if (productWeight !== -1.0) {
                return graph[start][neighbor] * productWeight;
            }
        }
    }

    return -1.0;
};
