/*

560. Subarray Sum Equals K
https://leetcode.com/problems/subarray-sum-equals-k/

O(n) solution using a frequency map of prefix sums

1. Initialize the frequency map of prefix sums to { 0: 1 }.
   We need it to increment the counter for every element equal to k.

2. Traverse the array from left to right. At each step:
    2.1 Calculate the prefix sum up to the current element
    2.2 Increment the counter by the number of times the prefix sum
        equal to (sum - k) has already appeared
    2.3 Update the prefix sum map with the current prefix sum

3. Return the counter

*/

const subarraySum = (nums, k) => {
    const sumFreq = { 0: 1 };
    let sum = 0, counter = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        counter += sumFreq[sum - k] || 0;
        sumFreq[sum] ? sumFreq[sum]++ : sumFreq[sum] = 1;
    }

    return counter;
};
