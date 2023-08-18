/*
* 1615. Maximal Network Rank
* https://leetcode.com/problems/maximal-network-rank/
*
*/

const buildAdjList = edges => {
    const adj = {};

    edges.forEach(([a, b]) => {
        if (!adj[a]) adj[a] = new Set();
        if (!adj[b]) adj[b] = new Set();
        adj[a].add(b);
        adj[b].add(a);
    });

    return adj;
}


const maximalNetworkRank = (n, roads) => {
    const adj = buildAdjList(roads);
    let max = 0;

    for (let a = 0; a < n - 1; a++) {
        for (let b = a + 1; b < n; b++) {
            const aEdges = adj[a] ? adj[a].size : 0;
            const bEdges = adj[b] ? adj[b].size : 0;
            let rank = aEdges + bEdges;
            if (adj[a] && adj[a].has(b)) rank--;
            max = Math.max(max, rank)
        }
    }

    return max;
};