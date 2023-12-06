/*
* 691. Stickers to Spell Word
* https://leetcode.com/problems/stickers-to-spell-word/
*
*/

const charCode = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

const getChar = code => String.fromCharCode(code + 'a'.charCodeAt(0));

const freqMap = str => {
    const count = new Array(26).fill(0);
    for (const char of str) {
        count[charCode(char)]++;
    }
    return count;
}

const minStickers = (stickers, target) => {
    const cache = new Map();

    const stickerFreq = stickers.map(freqMap);

    const dfs = (target) => {
        if (target === '') return 0;
        if (cache.has(target)) return cache.get(target);

        let result = Infinity;
        const targetCount = freqMap(target);

        for (const sticker of stickerFreq) {
            // Skip if doesn't contain 1st character of target
            if (sticker[charCode(target[0])] === 0) continue;

            let newTarget = '';
            for (let i = 0; i < 26; i++) {
                if (targetCount[i] > sticker[i]) {
                    newTarget += getChar(i).repeat(targetCount[i] - sticker[i]);
                }
            }

            const subproblem = dfs(newTarget);
            if (subproblem != -1) {
                result = Math.min(result, 1 + subproblem);
            }
        }

        cache.set(target, result === Infinity ? -1 : result);
        return cache.get(target);
    };

    return dfs(target);
};