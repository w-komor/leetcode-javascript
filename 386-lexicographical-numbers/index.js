/*
* 386. Lexicographical Numbers
* https://leetcode.com/problems/lexicographical-numbers
*
*/

const lexicalOrder = (n, prefix = 0) => {
    const results = [];

    if (prefix <= n && prefix > 0) results.push(prefix);
    if (prefix > n) return results;

    for (let i = 0; i < 10; i++) {
        const next = prefix * 10 + i;
        if (next === prefix) continue;
        results.push(...lexicalOrder(n, next));
    }

    return results;
};
