/*
* 1793. Maximum Score of a Good Subarray
* https://leetcode.com/problems/maximum-score-of-a-good-subarray/
*
* Greedy approach:
* - start with [nums[k]], because it has to be in the array anyway
* - expand array in the direction of the greater element
* This works because you always want to add the greater element to the array,
* because it increases your max score (unless you found max score already in the past)
*
*/

const maximumScore = (nums, k) => {
    const n = nums.length;
    let left = k,
        right = k,
        max = nums[k],
        currentMin = nums[k];

    while (left > 0 || right < n - 1) {
        if ((left > 0 ? nums[left - 1] : 0) < (right < n - 1 ? nums[right + 1] : 0)) {
            right += 1;
            currentMin = Math.min(currentMin, nums[right]);
        } else {
            left -= 1;
            currentMin = Math.min(currentMin, nums[left]);
        }

        max = Math.max(max, currentMin * (right - left + 1));
    }
    
    return max;
};
