/*
* 823. Binary Trees with Factors
* https://leetcode.com/problems/binary-trees-with-factors
*
*/

const numFactoredBinaryTrees = arr => {
    const MOD = 1000000007;
    arr.sort((a, b) => a - b);
    let dp = new Map(); // number of trees possible with root 'i'.
    let result = 0; // sum of trees rooted at each number.

    for (let i = 0; i < arr.length; i++) {
        // Start with only one tree: the number itself without any children.
        dp.set(arr[i], 1);

        // iterate through all numbers that came before the current number.
        for (let j = 0; j < i; j++) {
            // If the number can be factored by a previous number, then we find the complementary factor.
            // It must also exist in our array.
            if (arr[i] % arr[j] === 0) {
                let otherFactor = arr[i] / arr[j];
                if (dp.has(otherFactor)) {
                    // Calculate the product of possible trees under the children and add to the current root.
                    // The product also considers different combinations of left and right children.
                    dp.set(arr[i], (dp.get(arr[i]) + dp.get(arr[j]) * dp.get(otherFactor)) % MOD);
                }
            }
        }

        // Add the number of possible trees rooted at the current number to the result.
        result = (result + dp.get(arr[i])) % MOD;
    }

    // Return the total number of possible binary trees modulo 10**9 + 7.
    return result;
};