/*
* 785. Is Graph Bipartite
* https://leetcode.com/problems/is-graph-bipartite/
*
*/

const isBipartite = graph => {
    let n = graph.length;
    let colors = new Array(n).fill(-1);

    const dfs = (node, color) => {
        if (colors[node] !== -1) {
            // If node already colored, check if same color
            return colors[node] === color;
        }

        colors[node] = color;

        for (let adjacent of graph[node]) {
            if (!dfs(adjacent, 1 - color)) {
                // If coloring fails, graph is not bipartite
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < n; i++) {
        if (colors[i] === -1 && !dfs(i, 0)) {
            // If a component is not bipartite, the whole graph is not bipartite
            return false;
        }
    }

    return true;
};