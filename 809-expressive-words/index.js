/*
*
* 809. Expressive Words
* https://leetcode.com/problems/expressive-words
*
* For each word, iterate over letters in s and word simultaneously.
* If the letter group doesn't match and cannot be stretced, don't count that word.
* 
*/

const expressiveWords = (s, words) => {
    let count = 0;
  
    for (let word of words) {
        let i = 0;
        let j = 0;
    
        while (i < s.length && j < word.length && word[j] === s[i]) {
            let lenS = 1;
            let lenW = 1; 
            while (i+lenS < s.length && s[i+lenS] === s[i]) lenS++;
            while (j+lenW < word.length && word[j+lenW] === word[j]) lenW++;

            if (lenS < lenW || lenS > lenW && lenS < 3) break;
      
            i += lenS;
            j += lenW;
        }
    
        if (i === s.length && j === word.length) count++;
    }
  
    return count;
};
