/*
*
* 31. Next Permutation
* https://leetcode.com/problems/next-permutation
*
* Good visualization of the problem:
* the search space of the problem can be represented as a tree.
* Going to the next permutation is going to the next node in the tree during DFS.
*
* Algorithm to construct the next permutation:
* 1. Find the largest index k such that nums[k] < nums[k + 1].
* If no such index exists, the permutation is sorted in descending order, just reverse it to ascending order and we are done.
* 2. Find the largest index l greater than k such that nums[k] < nums[l].
* 3. Swap the value of nums[k] with that of nums[l].
* 4. Reverse the sequence from nums[k + 1] to the end of the array.
*
*/

const nextPermutation = nums => {
    let k = nums.length - 2,
        l = nums.length - 1;

    while (k >= 0 && nums[k + 1] <= nums[k]) {
        k--;
    }

    if (k === -1) {
        nums.reverse();
        return;
    }

    while (nums[l] <= nums[k]) {
        j--;
    }
    [nums[k], nums[l]] = [nums[l], nums[k]];

    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};