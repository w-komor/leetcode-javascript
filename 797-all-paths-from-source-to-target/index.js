/*

797. All Paths From Source to Target
https://leetcode.com/problems/all-paths-from-source-to-target/

DFS + Backtracking

const last for clean code / convenience

*/

const allPathsSourceTarget = graph => {
    const result = [];

    const getPaths = (graph, path) => {
        const last = path[path.length - 1];
        if (last === graph.length - 1) {
            result.push(path);
        }
        graph[last].forEach(i => getPaths(graph, [...path, i]));
    }

    getPaths(graph, [0]);

    return result;
};
