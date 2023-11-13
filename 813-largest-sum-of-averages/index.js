/*
* 813. Largest Sum of Averages
* https://leetcode.com/problems/largest-sum-of-averages/
*
*/

/*
1. Calculate the prefix sum for the array.
2. Start with considering the whole array as one group and calculate its average.
3. iteratively consider splitting the array into more groups (up to k), each time
    calculating the best possible score for each split and updating our best score.
4. the best score when you're at the start of the array, having the option to
    split into up to k groups, is the answer.
*/

const largestSumOfAverages = (nums, k) => {
    let N = nums.length;
    let P = new Array(N + 1).fill(0);
    for (let i = 0; i < N; ++i) P[i + 1] = P[i] + nums[i];

    function average(i, j) {
        return (P[j] - P[i]) / (j - i);
    }

    let dp = new Array(N).fill(0);
    for (let i = 0; i < N; ++i) {
        dp[i] = average(i, N);
    }

    for (let k1 = 0; k1 < k - 1; ++k1) {
        for (let i = 0; i < N; ++i) {
            for (let j = i + 1; j < N; ++j) {
                dp[i] = Math.max(dp[i], average(i, j) + dp[j]);
            }
        }
    }
    return dp[0];
};