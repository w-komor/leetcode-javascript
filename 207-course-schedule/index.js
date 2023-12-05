/*
* 207. Course Schedule
* https://leetcode.com/problems/course-schedule
*
*/

const UNVISITED = 0;
const VISITING = 1;
const VISITED = 2;

const canFinish = (numCourses, prerequisites) => {
    const graph = new Array(numCourses).fill(0).map(() => []);
    for (let [a, b] of prerequisites) {
        graph[a].push(b);
    }

    const visited = new Array(numCourses).fill(UNVISITED);

    const dfs = (course) => {
        if (visited[course] === VISITING) return false; // Found a cycle
        if (visited[course] === VISITED) return true;

        visited[course] = VISITING;
        for (let prereq of graph[course]) {
            if (!dfs(prereq)) return false;
        }
        visited[course] = VISITED;
        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};