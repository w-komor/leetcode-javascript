/*
* 152. Maximum Product Subarray
* https://leetcode.com/problems/maximum-product-subarray/
*
*/

const maxProduct = nums => {
    if (nums.length === 0) return 0;
    
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let tempMax = Math.max(curr, maxSoFar * curr, minSoFar * curr);
        minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr);

        maxSoFar = tempMax;
        result = Math.max(maxSoFar, result);
    }

    return result;
};