/*
*
* 55. Jump Game
* https://leetcode.com/problems/jump-game
*
*/

const canJump = nums => {
    let max = 0, current = 0;

    while (max >= current && max < nums.length) {
        max = Math.max(max, current + nums[current]);
        current++;
    }

    return max >= nums.length - 1;
};
