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
        let p1 = i + 1,
            p2 = nums.length - 1;
        while (p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2];
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
            sum > target ? p2-- : p1++;
        }
    }

    return closest;
};
