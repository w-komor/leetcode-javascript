const getMasks = str => str.split('')
    .map((_, i) => str.slice(0, i) + '*' + str.slice(i + 1));

const buildGraph = strs => {
    const graph = {};

    for (const str of strs) {
        const masks = getMasks(str);
        for (const m of masks) {
            if (!graph[m]) graph[m] = new Set();
            graph[m].add(str);
        }
    }

    return graph;
}

var minMutation = function(startGene, endGene, bank) {
    if (startGene === endGene) return 0;
    const graph = buildGraph([startGene, ...bank]);
    let queue = [startGene],
        visited = new Set([startGene]),
        result = 0;

    while (queue.length > 0) {
        result++;
        const nextQueue = [];

        for (const word of queue) {
            const masks = getMasks(word);
            for (const mask of masks) {
                const nextQueueItems = [...graph[mask]].filter(word => !visited.has(word));
                for (const item of nextQueueItems) {
                    if (item === endGene) return result;
                    visited.add(item);
                }
                nextQueue.push(...nextQueueItems);
            }
        }

        queue = nextQueue;
    }

    return -1;
};