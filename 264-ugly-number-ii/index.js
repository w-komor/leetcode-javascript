/*
* 264. Ugly Number II
* https://leetcode.com/problems/ugly-number-ii/
*
*/

const nthUglyNumber = n => {
    const dp = [1];
    let i2 = 0, i3 = 0, i5 = 0;

    for (let i = 1; i < n; i++) {
        const result2 = dp[i2] * 2;
        const result3 = dp[i3] * 3;
        const result5 = dp[i5] * 5;
        let nextUgly = Math.min(result2, result3, result5);
        dp[i] = nextUgly;

        if (nextUgly === result2) i2++;
        if (nextUgly === result3) i3++;
        if (nextUgly === result5) i5++;
    }

    return dp[n - 1];
}