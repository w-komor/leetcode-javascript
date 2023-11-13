/*
* 523. Continuous Subarray Sum
* https://leetcode.com/problems/continuous-subarray-sum/
*
*/

const checkSubarraySum = (nums, k) => {
    let mod = 0;
    let hash = { 0: 0 };
    
    for (let i = 0; i < nums.length; i++) {
        mod = (mod + nums[i]) % k;
        if (hash[mod] === undefined) {
            hash[mod] = i + 1;
        } else if (hash[mod] < i) {
            return true;
        }
    }

    return false;
};