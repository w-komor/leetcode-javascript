/*
* 282. Expression Add Operators
* https://leetcode.com/problems/expression-add-operators/
*
*/

function addOperators(nums, target) {
    const result = [];

    const backtrack = (expr, sum, prev, start) => {
        if (start === nums.length) {
            if (sum === target) result.push(expr);
            return;
        }
        let currStr = '';
        for (let i = start; i < nums.length; i++) {
            currStr += nums[i];
            const curr = parseInt(currStr);

            // edge cases: prev===0, +34 -34 *34
            if (start === 0) {
                backtrack(currStr, curr, curr, i + 1);
                if (currStr === '0') return;
                continue;
            }

            backtrack(expr+'*'+curr, sum - prev + prev * curr, prev * curr, i + 1);
            backtrack(expr+'+'+curr, sum + curr, curr, i + 1);
            backtrack(expr+'-'+curr, sum - curr, -curr, i + 1);

            if (currStr === '0') return; 
        }
    }

    backtrack('', 0, 0, 0);

    return result;
};