/*
* 2705. Compact Object
* https://leetcode.com/problems/compact-object/
*
*/

const compactObject = obj => {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const compacted = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if (value) compacted[key] = value;
    }

    return compacted;
};