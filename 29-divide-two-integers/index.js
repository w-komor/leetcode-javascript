/*
* 29. Divide Two Integers
* https://leetcode.com/problems/divide-two-integers/
*
* sum = 0;
* while (sum + divisor <= dividend) sum++ answer++
*
*/

const MIN_INTEGER = -2147483648;
const MAX_INTEGER = 2147483647;

const divide = (dividend, divisor) => {
    if (divisor === 0) return Infinity;
    if (dividend === 0) return 0;

    const resultIsNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let answer = 0;

    if (divisor === 1) {
        answer = dividend;
    } else {
        let sum = 0;
        while (sum + divisor <= dividend) {
            sum += divisor;
            answer++;
        }
    }

    return resultIsNegative ? Math.max(0 - answer, MIN_INTEGER) : Math.min(answer, MAX_INTEGER);
};
