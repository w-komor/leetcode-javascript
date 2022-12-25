/*
* 127. Word Ladder
* https://leetcode.com/problems/word-ladder
*
*/

const getMasks = word => word
    .split('')
    .map((_, i) => word.slice(0, i) + '*' + word.slice(i + 1));

const buildGraph = wordList => {
    let graph = {};
    
    for (let word of wordList) {
        const masks = getMasks(word);
        for (let m of masks) {
            graph[m] ? graph[m].push(word) : graph[m] = [word];
        }
    }
    
    return graph;
}

const getNextLevel = (words, graph, visited) => {
    const next = {};
    for (let word of words) {
        const masks = getMasks(word);
        for (let mask of masks) {
            if (!graph[mask]) continue;
            for (let w of graph[mask]) {
                if (w !== word && !visited[w]) next[w] = true;
            }
        }
    }
    return next;
}

const ladderLength = (beginWord, endWord, wordList) => {
    if (!wordList.some(w => w === endWord)) return 0;
    let q1 = [beginWord],
        q2 = [endWord],
        visited1 = {},
        visited2 = {},
        level = 1,
        graph = buildGraph(wordList);
    
    function markVisited() {
        q1.forEach(w => visited1[w] = true);
        q2.forEach(w => visited2[w] = true);
    }
    
    while (q1.length || q2.length) {
        level++;
        const next1 = getNextLevel(q1, graph, visited1);
        const next2 = getNextLevel(q2, graph, visited2);
        if (q1.some(w => next2[w])) break;
        if (q2.some(w => next1[w])) break;
        markVisited();
        level++;
        if (Object.keys(next1).some(w => next2[w])) break;
        q1 = [...Object.keys(next1)];
        q2 = [...Object.keys(next2)];
        markVisited();
        if (!(q1.length || q2.length)) {
            level = 0;
            break;
        }
    }

    return level;
};
