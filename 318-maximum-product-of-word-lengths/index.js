/*
* 318. Maximum Product of Word Lengths
* https://leetcode.com/problems/maximum-product-of-word-lengths/
*
*
* create a bitmask for everty word: "ab" or "aabb" => 11000...
*/

const maxProduct = words => {
    let max = 0; 
    const masks = new Array(words.length);

    for (let i = 0; i < words.length; i++) {
        for (let c of words[i]) masks[i] |= 1 << (c.charCodeAt(0) - 97);
        for (let j = 0; j < i; j++)
            if (!(masks[i] & masks[j])) max = Math.max(max, words[i].length * words[j].length);
    }

    return max;
};
