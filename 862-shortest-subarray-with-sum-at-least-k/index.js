/*
* 862. Shortest Subarray with Sum at Least K
* https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
*
* - calculate prefix sums to get the sum of any subarray in O(1)
* - use a deque to keep track of candidate starting points
*/

const shortestSubarray = (arr, k) => {
    let N = arr.length,
        res = N + 1,
        deque = [];

    for (let i = 0; i < N; i++) {
        if (i > 0) {
            arr[i] += arr[i - 1];
        }

        if (arr[i] >= k) {
            res = Math.min(res, i + 1);
        }

        while (deque.length && arr[i] - arr[deque[0]] >= k) {
            res = Math.min(res, (i - deque[0]));
            deque.shift();
        }

        while (
            deque.length > 0 &&
            arr[i] <= arr[deque[deque.length - 1]]
        ) {
            deque.pop();
        }
        deque.push(i);
    }

    return res <= N ? res : -1;
};