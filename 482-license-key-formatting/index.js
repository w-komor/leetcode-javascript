/*

482. License Key Formatting

https://leetcode.com/problems/license-key-formatting

*/

const licenseKeyFormatting = (s, k) => {
    s = s.split('').filter(char => char !== '-').join('').toUpperCase();

    const firstGroupLength = s.length % k;
    const remainingGroups = Math.floor(s.length / k);
    let groups = [];
    let currentIndex = 0;

    if (firstGroupLength > 0) {
        groups.push(s.slice(currentIndex, firstGroupLength));
        currentIndex += firstGroupLength;
    }
    
    for (let i = 0; i < remainingGroups; i++) {
        groups.push(s.slice(currentIndex, currentIndex + k));
        currentIndex += k;
    }
    
    return groups.join('-');
};
