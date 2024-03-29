/*
* 171. Excel Sheet Column Number
* https://leetcode.com/problems/excel-sheet-column-number/
*
*/

const titleToNumber = s => {
    let total = 0;
    const asciiBase = 'A'.charCodeAt(0);
    for (let i = 0; i < s.length; i += 1) {
        total = total * 26 + s.charCodeAt(i) - asciiBase + 1;
    }
    return total;
};
