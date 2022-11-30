/*
* 2193. Minimum Number of Moves to Make Palindrome
* https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/
*
* This greedy solution is O(n^2). A O(nlogn) solution is possible using
* a segment tree or a binary indexed tree.
*
*/

const minMovesToMakePalindrome = s => {
    let res = 0;

    while (s.length) {
        const i = s.indexOf(s[s.length - 1]);
        if (i === s.length - 1) {
            res += Math.floor(i / 2);
        } else {
            res += i;
            s = s.slice(0, i) + s.slice(i + 1);
        }
        s = s.slice(0, s.length - 1);
    }

    return res;
}
