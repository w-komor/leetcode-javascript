/*
* 1823. Find the Winner of the Circular Game
* https://leetcode.com/problems/find-the-winner-of-the-circular-game/
*
*/

// We add 1 at the end because friends are 1-indexed.

const findTheWinner = (n, k) => {
    if (n === 1) return 1;
    return (findTheWinner(n - 1, k) + k - 1) % n + 1;
};