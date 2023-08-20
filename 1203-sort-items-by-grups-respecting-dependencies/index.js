/*
* 1203. Sort Items By Grups Respecting Dependencies
* https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
*
*/

const sortItems = (n, groupCount, group, beforeItems) => {
    // Create groups for items having no group.
    for (let u = 0; u < group.length; u++) {
        if (group[u] === -1) {
            group[u] = groupCount++;
        }
    }

    // Build directed graph for items and groups.
    const itemsGraph = new Array(n).fill(0).map(() => []);
    const groupGraph = new Array(groupCount).fill(0).map(() => []);
    const itemsIndegree = new Array(n).fill(0);
    const groupIndegree = new Array(groupCount).fill(0);

    for (let u = 0; u < n; u++) {
        for (const v of beforeItems[u]) {
            itemsGraph[v].push(u);
            itemsIndegree[u]++;
            if (group[u] !== group[v]) {
                groupGraph[group[v]].push(group[u]);
                groupIndegree[group[u]]++;
            }
        }
    }

    const topologicalSort = (graph, indegree) => {
        const result = [];
        const queue = [];
        for (let i = 0; i < indegree.length; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }
        while (queue.length) {
            const u = queue.shift();
            result.push(u);
            for (const v of graph[u]) {
                indegree[v]--;
                if (indegree[v] === 0) {
                    queue.push(v);
                }
            }
        }
        return result.length === indegree.length ? result : [];
    };

    const itemsOrder = topologicalSort(itemsGraph, itemsIndegree);
    const groupOrder = topologicalSort(groupGraph, groupIndegree);

    // check for cycled in items or groups.
    if (itemsOrder.length === 0 || groupOrder.length === 0) {
        return [];
    }

    const orderWithinGroup = new Array(groupCount).fill(0).map(() => []);
    for (const v of itemsOrder) {
        orderWithinGroup[group[v]].push(v);
    }

    const result = [];
    for (const groupId of groupOrder) {
        result.push(...orderWithinGroup[groupId]);
    }
    return result;
};