/*
*
* 485. Max Consecutive Ones
* https://leetcode.com/problems/max-consecutive-ones/
*
*/

const findMaxConsecutiveOnes = nums => {
    let curr = 0,
        max = 0;
    
    for (let num of nums) {
        num === 1 ? curr++ : curr = 0;
        max = Math.max(max, curr);
    }

    return max;
};
