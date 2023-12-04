/*
* 778. Swim in Rising Water
* https://leetcode.com/problems/swim-in-rising-water/
*
*/

var swimInWater = function(grid) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // Priority queue stores next step based on minimum depth
    const minHeap = new MinPriorityQueue({ compare: (a, b) => a.depth - b.depth });
    // Enqueue the start
    minHeap.enqueue({ row: 0, col: 0, depth: grid[0][0], maxDepth: grid[0][0] });
    let visited = new Set();

    // Iterate until the heap is empty
    while (minHeap.size()) {
        let { row, col, maxDepth } = minHeap.dequeue();
        let currentPosition = `${row}-${col}`;
        visited.add(currentPosition);

        if (row === grid.length - 1 && col === grid[0].length - 1) {
            return maxDepth;
        }

        for (let [deltaRow, deltaCol] of directions) {
            let newRow = row + deltaRow, newCol = col + deltaCol;
            let newPosition = `${newRow}-${newCol}`;

            if (visited.has(newPosition) || newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[0].length) {
                continue;
            }

            // Enqueue the new position with updated depths
            minHeap.enqueue({
                row: newRow,
                col: newCol,
                depth: grid[newRow][newCol],
                maxDepth: Math.max(maxDepth, grid[newRow][newCol])
            });
        }
    }
};
