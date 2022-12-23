/*
* 46. Permutations
* https://leetcode.com/problems/permutations
*
* Using Heap's algorithm for permutation generation.
*
* Initially, size = nums.length.
* If at any point size === 1, we add the array to the results.
* For each i from 0 to size-1:
*    - run heapPermutation with size = size-1
*    - if size is odd, swap the first element with element size-1
*    - if size is even, swap the i-th element with element size-1
*/

const permute = nums => {
    const results = [];
    heapPermutation(nums, nums.length, results);
    return results;
};

const heapPermutation = (a, size, results) => {
    if (size === 1) return results.push([...a]);

    for (let i = 0; i < size; i++) {
        heapPermutation(a, size - 1, results);
        const swap = size % 2 === 1 ? 0 : i;
        [a[swap], a[size - 1]] = [a[size - 1], a[swap]];
    }
}
