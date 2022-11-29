/*
* 2468. Split Message Based on Limit
* https://leetcode.com/problems/split-message-based-on-limit
*
*/

const splitMessage = (s, limit) => {
    let cur = 0,
        parts = 0,
        i = 0;

    while (
        3 + String(parts).length * 2 < limit
        && cur + s.length + (3 + String(parts).length) * parts > limit * parts
    ) {
        parts++;
        cur += String(parts).length;
    }

    const res = [];
    if (3 + String(parts).length * 2 < limit) {
        for (let j = 1; j <= parts; j++) {
            const l = limit - (String(j).length + 3 + String(parts).length);
            res.push(`${s.slice(i, i + l)}<${j}/${parts}>`);
            i += l;
        }
    }

    return res;
}
