/*
* 263. Ugly Number
* https://leetcode.com/problems/ugly-number/
*
* Keep dividing by 2, 3, 5 until the number is not divisible by any of them.
* If number is not equal to 1, then it is not an ugly number.
* Separately handle the case when number is 0.
*
*/

const isUgly = n => {
    const hideousPrimes = [2, 3, 5];
    for (let prime of hideousPrimes) {
        while (n && n % prime === 0) n /= prime;
    }
    return n === 1;
};
