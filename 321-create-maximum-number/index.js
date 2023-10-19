/*
* 321. Create Maximum Number
* https://leetcode.com/problems/create-maximum-number
*/

const maxNumber = (nums1, nums2, k) => {
    const m = nums1.length,
        n = nums2.length;
    
    // Helper function to get the maximum number from one array
    const maxArray = (nums, k) => {
        const stack = [];
        let drop = nums.length - k;
        for (const num of nums) {
            while (drop > 0 && stack.length && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        return stack.slice(0, k);
    };
    
    // Helper function to merge two numbers
    const merge = (nums1, nums2) => {
        const merged = [];
        while (nums1.length || nums2.length) {
            const takeFromNums1 = nums1.length && (!nums2.length || nums1.join('') > nums2.join(''));
            merged.push(takeFromNums1 ? nums1.shift() : nums2.shift());
        }
        return merged;
    };
    
    // Get the maximum number for all possible lengths from two arrays
    let result = [];
    for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
        const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i));
        if (result.join('') < candidate.join('')) {
            result = candidate;
        }
    }
    return result;
};