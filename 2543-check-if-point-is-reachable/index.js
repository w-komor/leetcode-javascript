/*
* 2543. Check if Point is Reachable
* https://leetcode.com/problems/check-if-point-is-reachable/
*
*/

const isPow2 = n => (n & (n - 1)) === 0;

const gcd = (x, y) => x === 0 ? y : gcd(y % x, x);

const isReachable = (x, y) => isPow2(gcd(x, y));
