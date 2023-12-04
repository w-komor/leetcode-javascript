/*
* 313. Super Ugly Number
* https://leetcode.com/problems/super-ugly-number/
*
*/

const nthSuperUglyNumber = (n, primes) => {
    let dp = [1];
    let indices = new Array(primes.length).fill(0);

    for (let i = 1; i < n; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 0; j < primes.length; j++) {
            min = Math.min(min, dp[indices[j]] * primes[j]);
        }
        dp[i] = min;

        for (let j = 0; j < primes.length; j++) {
            if (min === dp[indices[j]] * primes[j]) {
                indices[j]++;
            }
        }
    }

    return dp[n - 1];
};
