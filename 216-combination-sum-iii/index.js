/*
* 216. Combination Sum III
* https://leetcode.com/problems/combination-sum-iii/
*
*/

const RANGE = 9;

const combinationSum3 = (k, n) => {
    const results = [];
    
    const backtrack = (path, sum) => {
        if (sum === n && path.length === k) {
            results.push([...path]);
            return;
        }
        if (sum > n || path.length > k) {
            return;
        }

        const last = path[path.length - 1];
        const min = last ? last + 1 : 1;

        if (min > RANGE) {
            return;
        }

        for (let num = min; num <= RANGE; num++) {
            path.push(num);
            backtrack(path, sum + num);
            path.pop();
        }
    };

    backtrack([], 0);

    return results;
};