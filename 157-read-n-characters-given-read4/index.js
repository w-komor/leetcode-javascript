/*
 * 158. Read N Characters Given read4
 * https://leetcode.com/problems/read-n-characters-given-read4
 */

const solution = read4 => {
    const internalBuf = [];
    return (buf, n) => {
        for (n; n > 0; n--) {
            if (internalBuf.length === 0) read4(internalBuf);
            if (internalBuf.length === 0) break;
			buf.push(internalBuf.shift());
        }
    }
};