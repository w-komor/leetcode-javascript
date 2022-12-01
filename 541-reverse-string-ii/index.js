/*
* 541. Reverse String II
* https://leetcode.com/problems/reverse-string-ii/
*
*/

const reverseStr = (s, k) => {
    const reversed = s.slice(0, k).split('').reverse().join('');
    if (s.length <= 2 * k) {
        return reversed + s.slice(k);
    } else {
        return reversed + s.slice(k, k * 2) + reverseStr(s.slice(k * 2), k);
    }
}
