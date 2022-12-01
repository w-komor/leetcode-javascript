/*
* 1704. Determine if String Halves Are Alike
* https://leetcode.com/problems/determine-if-string-halves-are-alike/
*
*/

const halvesAreAlike = s => {
    const vowels = { a: true, e: true, i: true, o: true, u: true };
    const isVowel = char => vowels[char.toLowerCase()] ? 1 : 0;
    const countVowels = str => str.split('').reduce((a, b) => a + isVowel(b), 0);
    return countVowels(s.slice(0, s.length / 2)) === countVowels(s.slice(s.length / 2));
};
