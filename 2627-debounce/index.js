/*
* 2627. Debounce
* https://leetcode.com/problems/debounce
*
*/

const debounce = (fn, t) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), t);
    }
};