/*
* 886. Possible Bipartition
* https://leetcode.com/problems/possible-bipartition/
*
*/

const possibleBipartition = (n, dislikes) => {
    const adj = [...new Array(n + 1)].map(() => []),
        visited = new Array(n + 1).fill(false),
        color = new Array(n + 1).fill(0);

    for (let [a, b] of dislikes) {
        adj[a].push(b);
        adj[b].push(a);
    }

    for (let i = 1; i <= n; i++) {
        if (!assignColors(i)) return false;
    }
    return true;

    function assignColors(node) {
        if (visited[node]) return true;
        const currentColor = new Set([1, 2]);

        for (let child of adj[node]) {
            if (color[child] === 1) currentColor.delete(1);
            if (color[child] === 2) currentColor.delete(2);
        }

        if (currentColor.size === 0) return false;

        color[node] = Math.min(...currentColor);
        visited[node] = true;  

        return adj[node].every(child => assignColors(child));
    }
};
