/*

884. Shifting Letters
https://leetcode.com/problems/shifting-letters

1. Create a map of letters to their position in the alphabet
2. Create an array of the sum of shifts for each letter
3. Map each letter to its new position in the alphabet

*/

const shiftingLetters = (s, shifts) => {
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
    const letterPos = {};
    alphabet.forEach((letter, i) => letterPos[letter] = i + 1);
    
    let shiftSum = new Array(shifts.length).fill(0);
    shiftSum[shifts.length - 1] = shifts[shifts.length - 1];
    for (let i = shifts.length - 2; i >= 0; i--) {
        shiftSum[i] = shiftSum[i + 1] + shifts[i];
    }
    
    let result = s.split('')
        .map(letter => letterPos[letter])
        .map((val, index) => (val + shiftSum[index]) % 26)
        .map(val => val === 0 ? 26 : val)
        .map(newVal => alphabet[newVal - 1])
        .join('');
    return result;
};
