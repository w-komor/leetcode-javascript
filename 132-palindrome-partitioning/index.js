/*
* 132. Palindrome Partitioning II
* https://leetcode.com/problems/palindrome-partitioning-ii/
*
*/

const minCut = s => {
    const n = s.length,
        isPalindrome = Array.from({ length: n }, () => new Array(n).fill(false)),
        cuts = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let minCuts = i;
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j < 2 || isPalindrome[j + 1][i - 1])) {
                isPalindrome[j][i] = true;
                minCuts = j === 0 ? 0 : Math.min(minCuts, cuts[j - 1] + 1);
            }
        }
        cuts[i] = minCuts;
    }

    return cuts[n - 1];
}