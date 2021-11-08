/*
1877. Minimize Maximum Pair Sum in Array
https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
*/

/*
O(nlog(n)) solution:
 - sort the array
 - continously pair up the largest number with the smallest number
 - return the maximum sum
*/
const minPairSum = nums => {
    nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < nums.length / 2; i++) {
        max = Math.max(nums[i] + nums[nums.length - 1 - i], max);
    }
    return max;
};

/*
O(n) solution:
 - use the fact that numbers are between 1 and 10^5
 - create a frequency map of numbers
 - use two pointers to match highest numbers with lowest numbers
*/

const MAXIMUM_VALUE = 10 ** 5;

const minPairSum = nums => {
    // create a frequency map for numbers between 1 and 10^5
    let freq = new Array(MAXIMUM_VALUE + 1).fill(0);
    nums.forEach(num => freq[num]++);

    // use two pointers to match largest and smaller numbers until none are left
    let left = 1,
        right = MAXIMUM_VALUE,
        max = 0;
    while (left <= right) {
        if (freq[left] === 0) {
            left++;
            continue;
        }
        if (freq[right] === 0) {
            right--;
            continue;
        }
        freq[left]--;
        freq[right]--;
        max = Math.max(max, left + right);
    }
    
    // return the largest found sum
    return max;
};