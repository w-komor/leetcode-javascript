/*
* 287. Find the Duplicate Number
* https://leetcode.com/problems/find-the-duplicate-number/
*
*/

const findDuplicate = nums => {
    let tortoise = nums[0];
    let hare = nums[0];

    // Floyd's cycle detection algorithm
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    // Find entry point of the cycle (duplicate number)
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    // hare now points to the duplicate number
    return hare;
};