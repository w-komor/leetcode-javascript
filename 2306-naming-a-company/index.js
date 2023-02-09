/*
* 2306. Naming a Company
* https://leetcode.com/problems/naming-a-company/
*
*/

const distinctNames = ideas => {
    const groups = new Array(26).fill().map(() => new Set());
    ideas.forEach(word => groups[word.charCodeAt(0) - 97].add(word.slice(1)));

    let result = 0;

    for (let i = 0; i < 25; i++) {
        for (let j = i + 1; j < 26; j++) {
            const [first, second] = [groups[i], groups[j]];
            const mutual = Array.from(first)
                .reduce((acc, char) => acc + (second.has(char) ? 1 : 0), 0);
            result += 2 * (first.size - mutual) * (second.size - mutual);
        }
    }

    return result;
};