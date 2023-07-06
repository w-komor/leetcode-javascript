/*
* 209. Minimum Size Subarray Sum
* https://leetcode.com/problems/minimum-size-subarray-sum/
*
*/

const minSubArrayLen = (target, nums) => {
    // sum contains numbers at indexes up to, but not including, right.
    let left = 0,
        right = 1,
        sum = nums[0],
        min = Infinity;

    while (true) {
        const isLargeEnough = sum >= target;
        const canRemoveLeft = left < right - 1;
        const canAddRight = right < nums.length;
        if (isLargeEnough) {
            min = Math.min(min, right - left);
        }
        if (isLargeEnough && canRemoveLeft) {
            sum -= nums[left];
            left++;
        } else if (!isLargeEnough && canAddRight) {
            sum += nums[right];
            right++;
        } else {
            break;
        }
    }

    return min === Infinity ? 0 : min;
};
