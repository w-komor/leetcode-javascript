/*
* 135. Candy
* https://leetcode.com/problems/candy/
*
*/

const candy = R => {
    const leftMin = new Array(R.length).fill(1),
        rightMin = new Array(R.length).fill(1);
    
    let level = 1;
    for (let i = 1; i < R.length; i++) {
        (R[i] > R[i - 1]) ? level++ : level = 1;
        leftMin[i] = level;
    }

    level = 1;
    for (let i = R.length - 2; i >= 0; i--) {
        (R[i] > R[i + 1]) ? level++ : level = 1;
        rightMin[i] = level;
    }

    return leftMin.reduce((acc, n, i) => acc + Math.max(leftMin[i], rightMin[i]), 0)
};
