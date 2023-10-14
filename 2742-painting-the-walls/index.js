/*
* 2742. Painting the Walls
* https://leetcode.com/problems/painting-the-walls/
*
*/

const paintWalls = (cost, time) => {
    const n = cost.length;
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER); // dp[i] is minimum cost to paint i walls
    dp[0] = 0; // base case

    for (let i = 0; i < n; ++i) {
        for (let j = n; j > 0; --j) {
            // Calculate the minimum cost to paint 'j' walls using the current wall 'i'
            // The minimum cost at 'j' is the minimum of:
            //   - The cost of painting the current wall 'i' + the cost of painting the previous walls (dp[j - time[i] - 1])
            //   - The cost of painting the previous walls without using the current wall 'i' (dp[j])
            dp[j] = Math.min(
                dp[j],
                dp[Math.max(j - time[i] - 1, 0)] + cost[i]
            );
        }
    }

    return dp[n];
}