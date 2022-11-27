/*
* 169. Majority Element
* https://leetcode.com/problems/majority-element/
*
* Boyer - Moore voting algorithm
*
*/

const majorityElement = nums => {
    let count = 0,
        candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        num === candidate ? count++ : count--;
    }

    return candidate;
};
