/*
* 16. 3Sum Closest
* https://leetcode.com/problems/3sum-closest/
*
* Sort the array, and then for each element, use two pointers to find the other two elements.
* Decrement the larger pointer if sum is too large.
* Increment the smaller pointer if sum is too small.
*
*/

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);
    let closest = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let ptr1 = i + 1,
            ptr2 = nums.length - 1;
        while (ptr1 < ptr2) {
            let sum = nums[i] + nums[ptr1] + nums[ptr2];
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
            sum > x ? ptr2-- : ptr1++;
        }
    }

    return closest;
};
