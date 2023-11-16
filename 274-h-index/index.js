/*
* 274. H-Index
* https://leetcode.com/problems/h-index/
*
*/

const hIndex = citations => {
    const n = citations.length;
    const buckets = new Array(n + 1).fill(0);

    for (const num of citations) {
        buckets[Math.min(num, n)]++;
    }

    let total = 0;
    
    for (let i = n; i > 0; i--) {
        total += buckets[i];
        if (total >= i) return i;
    }

    return 0;
};