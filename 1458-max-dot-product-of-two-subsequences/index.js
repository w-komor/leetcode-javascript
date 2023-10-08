/*
* 1458. Maximum Dot Product of Two Subsequences
* https://leetcode.com/problems/maximum-dot-product-of-two-subsequences/
*
*/

// dp[i][j] is the maximum dot product of the first i elements
// of nums1 and the first j elements of nums2
const maxDotProduct = (nums1, nums2) => {
    const n = nums1.length,
        m = nums2.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(m + 1).fill(-Infinity)
    );

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const currProduct = nums1[i - 1] * nums2[j - 1];

            dp[i][j] = Math.max(
                currProduct,               // Current dot product
                currProduct + dp[i - 1][j - 1], // Current dot product + max dot product of i - 1 and j - 1
                dp[i - 1][j],                // Skip element in nums1
                dp[i][j - 1]                 // Skip element in nums2
            );
        }
    }

    return dp[n][m];
};