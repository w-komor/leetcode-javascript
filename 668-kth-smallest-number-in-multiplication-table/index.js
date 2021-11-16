/*
668. Kth Smallest Number in Multiplication Table
https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/

Let's do a binary search with the following invariants:
- low is always too small to be the k-th smallest element (k is the solution we are looking for)
- high is always equal to or greater than k elements
At each iteration of binary search, we will check if 'high' is large enough
to be greater than or equal to k elements.

The check will go row by row through the multiplication table. At each row
it will count the number of elements smaller than or equal to the candidate number.
If count >= k, the target is large enough.
*/

const findKthNumber = (m, n, k) => {
    const enough = (target, m, n, k) => {
        let count = 0;
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(target / i), n);
        }
        return count >= k;
    }

    let low = 0,
        high = m * n;
    while (high - low > 1) {
        const mid = Math.floor((low + high) / 2);
        enough(mid, m, n, k) ? high = mid : low = mid;
    }
    return high;
};
