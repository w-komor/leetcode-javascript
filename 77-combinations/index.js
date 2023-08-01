/*
* 77. Combinations
* https://leetcode.com/problems/combinations/
*
*/

const combine = (n, k) => {
    let results = [];
    if (n < k || n < 1 || k < 1) {
        return results;
    }
    
    backtrack(results, [], 1, n, k);
    return results;
};

const backtrack = (results, combination, start, n, k) => {
    if (combination.length === k) {
        results.push(Array.from(combination));
        return;
    }
    
    for (let i = start; i <= n; i++) {
        combination.push(i);
        backtrack(results, combination, i + 1, n, k);
        combination.pop();
    }
};
