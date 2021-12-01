/*

198. House Robber
https://leetcode.com/problems/house-robber/

The solution is brilliantly described by heroes3001 here:
https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.

The code below is that same solution in JavaScript, with destructuring to avoid the need for a temp variable.

*/

const rob = nums => {
    let prev1 = 0,
        prev2 = 0;
    for (let num of nums) {
        [prev1, prev2] = [Math.max(prev2 + num, prev1), prev1];
    }
    return prev1;
};
