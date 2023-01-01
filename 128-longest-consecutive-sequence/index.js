/*
* 128. Longest Consecutive Sequence
* https://leetcode.com/problems/longest-consecutive-sequence/
*
* We would normally have to use a formal Union-Find data strucutre,
* but we can use a Set to simulate it since we know that the numbers
* have to be consecutive.
*
* To be efficient, we only check the length of the streak if
* num - 1 is not in the set.
*
*/

const longestConsecutive = nums => {
    const set = new Set(nums);
    let max = 0;

    for (const num of nums) {
        if (set.has(num - 1)) continue;
        let streak = 1;
        while (set.has(num + streak)) streak++;
        max = Math.max(max, streak);
    }

    return max;
};