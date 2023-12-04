/*
* 241. Different Ways to Add Parentheses
* https://leetcode.com/problems/different-ways-to-add-parentheses/
*
*/

var diffWaysToCompute = function(expression) {
    if (!isNaN(expression)) {
        return [parseInt(expression)];
    }

    let results = [];

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (isNaN(char)) {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));

            for (let l of left) {
                for (let r of right) {
                    if (char === '+') {
                        results.push(l + r);
                    } else if (char === '-') {
                        results.push(l - r);
                    } else if (char === '*') {
                        results.push(l * r);
                    }
                }
            }
        }
    }

    return results;
};