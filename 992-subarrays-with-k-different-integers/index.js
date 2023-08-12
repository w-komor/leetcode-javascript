/*
* 992. Subarrays With K Different Integers
* https://leetcode.com/problems/subarrays-with-k-different-integers/
*
*/

const subarraysWithKDistinct = (A, K) => {
    return atMostK(A, K) - atMostK(A, K - 1);
}

const atMostK = (A, K) => {
    let count = {};
    let res = 0, i = 0;

    for (let j = 0; j < A.length; j++) {
        if (!count[A[j]]) count[A[j]] = 0;
        if (count[A[j]] === 0) K -= 1;
        count[A[j]] += 1;

        while (K < 0) {
            count[A[i]] -= 1;
            if (count[A[i]] === 0) K += 1;
            i += 1;
        }

        res += j - i + 1;
    }

    return res;
}
