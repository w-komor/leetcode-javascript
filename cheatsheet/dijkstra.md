# Dijkstra's Algorithm

## Purpose

Finds the shortest path from a single source vertex to all 
other vertices in a weighted graph with non-negative weights.

## How it Works

It repeatedly selects the vertex with the smallest known distance
from the source, updates the cost of reaching its neighbors, and keeps track
of the shortest paths using a priority queue.

## Complexity:

The time complexity is:
O((V+E)logV) with a binary heap, where:
    V is the number of vertices,
    E is the number of edges.

## Use Case

Suitable for graphs with non-negative weights, like road networks.

## JavaScript implementation:

```javascript
function dijkstra(graph, startNode) {
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    // Initialize distances and prev
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        prev[vertex] = null;
    }
    distances[startNode] = 0;

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
        let [currentNode] = pq.dequeue();

        for (let neighbor in graph[currentNode]) {
            let alt = distances[currentNode] + graph[currentNode][neighbor];
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                prev[neighbor] = currentNode;
                pq.enqueue([neighbor, distances[neighbor]]);
            }
        }
    }

    return { distances, prev };
}
```

## Example usage:

```javascript
const graph = {
    A: {B: 1, C: 4},
    B: {A: 1, C: 2, D: 5},
    C: {A: 4, B: 2, D: 1},
    D: {B: 5, C: 1}
};

const startNode = 'A';
const result = dijkstra(graph, startNode);
console.log(result);
```