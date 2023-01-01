/*
* 60. Permutation Sequence
* https://leetcode.com/problems/permutation-sequence
*
* Use the solution from problem '31. Next Permutation' (k - 1) times.
*
*/

const nextPermutation = nums => {
    let i = nums.length - 2,
        j = nums.length - 1;

    while (i >= 0 && nums[i + 1] <= nums[i]) i--;

    if (i === -1) {
        nums.reverse();
        return;
    }

    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];

    i++;
    j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};

const getPermutation = (n, k) => {
    const nums = new Array(n).fill(0).map((_, i) => i + 1);
    for (let i = 1; i < k; i++) nextPermutation(nums);
    return nums.join('');
};