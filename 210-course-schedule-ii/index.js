/*
* 210. Course Schedule II
* https://leetcode.com/problems/course-schedule-ii/
*
*/

const UNVISITED = 0;
const VISITING = 1;
const VISITED = 2;

const findOrder = (n, prereqs) => {
    const graph = new Array(n).fill(0).map(() => []);
    for (const [req, target] of prereqs) graph[req].push(target);

    const visited = new Array(n).fill(UNVISITED);
    const stack = [];

    const dfs = course => {
        if (visited[course] === VISITING) return false;
        if (visited[course] === VISITED) return true;

        visited[course] = VISITING;
        for (const prereq of graph[course]) {
            if (!dfs(prereq)) return false;
        }
        visited[course] = VISITED;

        stack.push(course);
        return true;
    };

    for (let course = 0; course < n; course++) {
        if (!dfs(course)) return [];
    }

    return stack;
};