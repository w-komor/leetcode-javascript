/*
* 520. Detect Capital
* https://leetcode.com/problems/detect-capital/
*
*/

const detectCapitalUse = w => w.toUpperCase() === w || w.slice(1) === w.slice(1).toLowerCase();
