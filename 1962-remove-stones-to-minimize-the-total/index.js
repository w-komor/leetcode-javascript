/*
* 1962. Remove Stones to Minimize the Total
* https://leetcode.com/problems/remove-stones-to-minimize-the-total/
*
*/

const minStoneSum = (stones, k) => {
    const pq = new MaxPriorityQueue();
    let sum = 0;
    stones.forEach(stone => {
        pq.enqueue(stone);
        sum += stone;
    });

    for (let i = 0; i < k; i++) {
        const element = pq.dequeue().element;
        const removed = Math.floor(element / 2);
        sum -= removed;
        pq.enqueue(element - removed);
    }

    return sum;
};
