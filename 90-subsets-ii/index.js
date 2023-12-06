/*
* 90. Subsets II
* https://leetcode.com/problems/subsets-ii/
*
*/

const subsetsWithDup = nums => {
    nums.sort((a, b) => a - b);
    const results = [];

    const backtrack = (start, path) => {
        results.push([...path]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    };

    backtrack(0, []);

    return results;
};