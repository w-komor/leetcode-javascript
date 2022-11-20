/*
*
* 163. Missing Ranges
* https://leetcode.com/problems/missing-ranges/
*
* The key for writing a simple solution is to create the following array:
* [lower - 1, ...nums, upper + 1]
*
*/

const findMissingRanges = (nums, lower, upper) => {
    let arr = [lower - 1, ...nums, upper + 1], ranges = [];
    
    for (let i = 1; i < arr.length; i++) {
        const next = arr[i - 1] + 1;
        if (arr[i] !== next) {
            const start = next;
            const end = arr[i] - 1;
            ranges.push(start === end ? start.toString() : `${start}->${end}`);
        }
    }
    
    return ranges;
};
