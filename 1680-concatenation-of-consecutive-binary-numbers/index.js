/*

1680. Concatenation of consecutive binary numbers
https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/

*/

const concatenatedBinary = n => {
    const MOD = 10 ** 9 + 7;
    let num = 0;
    
    for (let i = 1; i <= n; i++) {
        num = (num * (2 ** i.toString(2).length)) + i;
        num = num % MOD;
    }

    return num;
};
