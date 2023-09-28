/*
* 905. Sort Array by Parity
* https://leetcode.com/problems/sort-array-by-parity/
*
*/

const sortArrayByParity = nums => nums.sort((a, b) => {
    if (a % 2 === b % 2) {
        return 0;
    } else if (a % 2 === 0) {
        return -1;
    } else {
        return 1;
    }
});
