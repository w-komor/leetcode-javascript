/*

78. Subsets
https://leetcode.com/problems/subsets/

There will be (2 ** nums.length) sets, because every number in nums can either be in the set, or not be in the set.

For each number from 0 to (2 ** nums.length) - 1, we can covert its binary representation to a set, adding number
from nums at every index which corresponds to a 1 in the binary representation.

*/

const isBitSet = (mask, pos) => (mask & (1 << pos)) === 0 ? false : true;

const subsets = nums => {
    const numOfSets = 2 ** nums.length;
    const sets = [];

    for (let i = 0; i < numOfSets; i++) {
        const set = [];
        for (let j = 0; j < nums.length; j++) {
            if (isBitSet(i, j)) {
                set.push(nums[j]);
            }
        }
        sets.push(set);
    }

    return sets;
};
