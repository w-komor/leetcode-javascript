/*
* 2262. Total Appeal of a String
* https://leetcode.com/problems/total-appeal-of-a-string/
*
*/

const appealSum = s => {
    const last = new Array(26).fill(-1);
    let res = 0;
    
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        res += (i - last[code]) * (s.length - i);
        last[code] = i;
    }
    
    return res;
};
