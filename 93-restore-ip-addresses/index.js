/*
 * 93. Restore IP Addresses
 * https://leetcode.com/problems/restore-ip-addresses
 * 
 */

const restoreIpAddresses = s => {
    const result = [];

    for (let a = 1; a < 4; a++) {
        for (let b = 1; b < 4; b++) {
            for (let c = 1; c < 4; c++) {
                for (let d = 1; d < 4; d++) {
                    if (a + b + c + d === s.length) {
                        const A = s.slice(0, a), B = s.slice(a, a + b), C = s.slice(a + b, a + b + c), D = s.slice(a + b + c);
                        if (
                            [A, B, C, D].every(str => !(str.length > 1 && str[0] === '0'))
                            && [A, B, C, D].every(str => parseInt(str) < 256)
                        ) {
                            result.push(`${A}.${B}.${C}.${D}`);
                        }
                    }
                }
            }
        }
    }

    return result;
};