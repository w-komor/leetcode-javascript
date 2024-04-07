/*
* 407. Trapping Rain Water II
* https://leetcode.com/problems/trapping-rain-water-ii/
*
* - store boundary cells in a min heap
* - for the lowest cell in the heap, check the neighbors:
*    - add trapped water to the result
*    - add the neighbor to the heap
*/

const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const trapRainWater = heightMap => {
    const m = heightMap.length,
        n = heightMap[0].length;

    if (n === 0 || m === 0) {
        return 0;
    }

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const minHeap = new Heap((a, b) => a.height > b.height);
    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                minHeap.insert({
                    height: heightMap[i][j],
                    x: i,
                    y: j
                });
                visited[i][j] = true;
            }
        }
    }

    while (!minHeap.empty) {
        const { height, x, y } = minHeap.pop();

        for (const [dirX, dirY] of DIRECTIONS) {
            const nx = x + dirX
                ny = y + dirY;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                result += Math.max(0, height - heightMap[nx][ny]);
                minHeap.insert({
                    height: Math.max(height, heightMap[nx][ny]),
                    x: nx,
                    y: ny
                });
            }
        }
    }

    return result;
}

class Heap {
    constructor(comparator) {
      this.arr = [];
      this.comparator = comparator;
    }

    get empty() {
        return this.arr.length === 0;
    }

    get length() {
        return this.arr.length;
    }
  
    siftDown(i) {
        const { arr } = this;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
  
        if (left >= arr.length) {
            return;
        }
  
        if (right >= arr.length) {
            if (this.comparator(arr[i], arr[left])) {
                this.swap(i, left);
            }
            return;
        }

        if (
            this.comparator(arr[left], arr[i]) &&
            this.comparator(arr[right], arr[i])
        ) {
            return;
        }
  
        if (this.comparator(arr[right], arr[left])) {
            this.swap(i, left);
            this.siftDown(left);
            return;
        }
  
        this.swap(i, right);
        this.siftDown(right);
    }
  
    bubbleUp(i) {
        const parent = Math.floor((i - 1) / 2);
        if (parent !== -1 && this.comparator(this.arr[parent], this.arr[i])) {
            this.swap(i, parent);
            this.bubbleUp(parent);
        }
    }
  
    insert(value) {
        this.arr.push(value);
        this.bubbleUp(this.arr.length - 1);
    }
  
    pop() {
        const { arr } = this;
        if (arr.length === 0) {
            return -1;
        }
  
        const popValue = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        this.siftDown(0);

        return popValue;
    }
  
    swap(a, b) {
        [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
    }
}