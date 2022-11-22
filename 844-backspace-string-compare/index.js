/*
*
* 844. Backspace String Compare
* https://leetcode.com/problems/backspace-string-compare/
*
*/

const backspaceCompare = (s, t) => {
    let sPointer = s.length - 1,
        sOmit = 0,
        tPointer = t.length - 1,
        tOmit = 0;
    
    while (sPointer > -1 || tPointer > -1) {
        const S = s[sPointer];
        const T = t[tPointer];
        if (S === '#') {
            sPointer--;
            sOmit++;
        } else if (sOmit > 0) {
            sPointer--;
            sOmit--;
        } else if (T === '#') {
            tPointer--;
            tOmit++;
        } else if (tOmit > 0) {
            tPointer--;
            tOmit--;
        } else if ((sPointer >= 0) !== (tPointer >= 0)) {
            return false;
        } else if (S !== T) {
            return false;
        } else {
            sPointer--;
            tPointer--;
        }
    }

    return true;
};
