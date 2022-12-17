/*
* 793. Preimage Size of Factorial Zeroes Function
* https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/
*
* Based on this excellent explanation:
* https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/117631/c-o-logn-math-solution-with-explanation/
*/

const preimageSizeFZF = K => {
    const sum = [1];
    for (let i = 1; i < 13; i++) {
        sum[i] = sum[i - 1] * 5 + 1;
    }
    for (let i = 12; i >= 0; i--) {
        if (K / sum[i] === 5) return 0;
        K = K % sum[i];
    }
    return 5;
}