/*
* 295. Find Median From Data Stream
* https://leetcode.com/problems/find-median-from-data-stream
*
*/

class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    addNum(num) {
        this.minHeap.enqueue(num);
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        }
    }

    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front().element;
        } else {
            return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
        }
    }
}