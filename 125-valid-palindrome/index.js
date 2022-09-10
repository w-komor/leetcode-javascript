/*
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

Sanitization must also remove underscores.
*/

const sanitize = s => s.replace(/[^0-9a-z]/gi, '').toLowerCase();
const reverse = s => s.split('').reverse().join('');
const isPalindrome = s => sanitize(s) === reverse(sanitize(s));