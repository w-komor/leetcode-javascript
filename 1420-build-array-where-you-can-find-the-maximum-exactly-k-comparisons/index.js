/*
* 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
* https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
*
*/

const numOfArrays = (n, m, k) => {
    const MOD = 1e9 + 7;
    let dp = Array.from({ length: n + 1 }, () => 
            Array.from({ length: m + 1 }, () => 
                Array(k + 1).fill(0)));

    for (let num = 1; num <= m; num++) {
        dp[1][num][1] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let max_num = 1; max_num <= m; max_num++) {
            for (let cost = 1; cost <= k; cost++) {
                let ans = (max_num * dp[i - 1][max_num][cost]) % MOD;
                
                for (let num = 1; num < max_num; num++) {
                    ans = (ans + dp[i - 1][num][cost - 1]) % MOD;
                }

                dp[i][max_num][cost] += ans;
                dp[i][max_num][cost] %= MOD;
            }
        }
    }

    let ans = 0;
    for (let num = 1; num <= m; num++) {
        ans = (ans + dp[n][num][k]) % MOD;
    }

    return ans;
}