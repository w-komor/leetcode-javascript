/*
* 927. Three Equal Parts
* https://leetcode.com/problems/three-equal-parts/
*
* 1. observe that the number of 1s in the array (k) must be divisible by 3
* 2. observe that each part must have k/3 1s
* 3. compare all three parts of the array to check for any mismatches
*
*/

const threeEqualParts = arr => {
    const total = arr.filter(n => n === 1).length;

    if (total === 0) {
        return [0, 2];
    } else if (total % 3 !== 0) {
        return [-1, -1];
    }

    let third = total / 3;
    let k = arr.length;
    while (third > 0) {
        k--;
        if (arr[k] === 1) {
            third--;
        }
    }

    const iterations = arr.length - k;
    const firstStart = arr.indexOf(1);
    const secondStart = arr.indexOf(1, firstStart + iterations);
    for (let i = 0; i < iterations; i++) {
        if (
            arr[i + firstStart] !== arr[k + i]
            || arr[i + secondStart] !== arr[k + i]
        ) {
            return [-1, -1];
        }
    }

    return [firstStart + iterations - 1, secondStart + iterations];
};