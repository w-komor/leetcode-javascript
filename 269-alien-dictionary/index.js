/*

269. Alien Dictionary
https://leetcode.com/problems/alien-dictionary/

Inspired by the following answer: https://leetcode.com/problems/alien-dictionary/discuss/422754/JavaScript-Solution-Topological-Sort-w-Explanation

The approach to solve this is as follows:
    1. Create a relationship graph between the letters
    2. Run a topological sort algorithm. It can be implemented as one of the following:
        - DFS
        - BFS
        - Kahn's algorithm

If there's a cycle in the graph, we should return ''.

There's also one special case: if words[i + 1] is a prefix of words[i], we should also return ''.
For example, for the input: ['abc', 'ab'] we should return ''.

1. BUILING A RELATIONSHIP GRAPH

The important thing to realize is that we only have to find the first meaningful pair of letters for each pair of adjacent words.
This means that for ['abxt', 'abct'] we only care about the relationship x -> t. Everything else in these words is of no value to us.

Building the graph has three steps:
    1.1. Initialize the graph:
        const graph = {};
    1.2. Add all letters:
        words.forEach(word => word.split('').forEach(char => graph[char] = []));
    1.3. For each word, find the relationship to add to the graph. We are looking for the lowest index such that:
        words[i][index] !== words[i + 1][index]
        We also have to check for the special case desribed above.

With these steps, for the example input ["wrt","wrf","er","ett","rftt"] we will get the following graph:

{
    w: [ 'e' ],
    r: [ 't' ],
    t: [ 'f' ],
    f: [],
    e: [ 'r' ]
}

2. TOPOLOGICAL SORT WITH DEPTH-FIRST SEARCH

We will run a standard graph DFS, with two maps:
    - 'visited', which is standard for DFS
    - 'visiting', which we will use to detect cycles

If you have trouble visualizing how this DFS works:
    - console.log the graph and each step of DFS
    - draw a graph on a piece of paper and follow along with the console.logs

*/

const alienOrder = words => {
    // 1. Build the relationship graph
    const graph = {};
    words.forEach(word => word.split('').forEach(char => graph[char] = []));

    for (let i = 0; i < words.length - 1; i++) {
        let top = words[i];
        let down = words[i + 1];
        let minLength = Math.min(top.length, down.length);
        for (let j = 0; j < minLength; j++) {
            if (top.length > down.length && top.startsWith(down)) {
                return '';
            }
            if (top[j] !== down[j]) {
                graph[top[j]].push(down[j]);
                break; // only need to find the first pair
            }
        }
    }

	// 2. Topological sort using depth-first search. The 'visiting' array is for cycle detection.
    const visiting = {},
        visited = {},
        result = [];

    const dfs = char => {
        if (visiting[char]) return false;
        if (visited[char]) return true;
        visiting[char] = true;
        for (let c of graph[char]) {
            if (!dfs(c)) return false;
        }
        visiting[char] = false;
        visited[char] = true;
        result.push(char);
        return true;
    }

    for (const key of Object.keys(graph)) {
        if (!dfs(key)) return '';
    }

    return result.reverse().join('');
};