/*
* 2444. Count Subarrays With Fixed Bounds
* https://leetcode.com/problems/count-subarrays-with-fixed-bounds
*
*/

const countSubarrays = (A, min, max) => {
    let result = 0,
        lastMin = -1,
        lastMax = -1,
        lastOutOfRange = -1;

    for (let i = 0; i < A.length; i++) {
        let a = A[i];
        if (!(min <= a && a <= max)) lastOutOfRange = i;
        if (a === min) lastMin = i;
        if (a === max) lastMax = i;
        const lastPossibleBeginning = Math.min(lastMin, lastMax);
        result += Math.max(0, lastPossibleBeginning - lastOutOfRange);
    }

    return result;
}
