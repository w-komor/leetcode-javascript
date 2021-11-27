/*

238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Multiplication is commutative, so we can use O(1) space to store the prefix and suffix and:
    - in first pass (reverse), set result to suffix
    - in second pass, multiply result by prefix

*/

const productExceptSelf = nums => {
    const result = [];
    let prefix = 1,
        suffix = 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = suffix;
        suffix *= nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    return result;
};
