/*
* 798. Smallest Rotation with Highest Score
* https://leetcode.com/problems/smallest-rotation-with-highest-score/
*
*/

const getScoreChangeEvents = (number, index, length) => {
    if (number === 0) return [];
    const increaseRotation = index + 1;
    let decreaseRotation = index + 1 - number;
    if (decreaseRotation <= 0) decreaseRotation += length;
    return [
        { k: increaseRotation, change: 1 },
        { k: decreaseRotation, change: -1 }
    ];

};

const bestRotation = nums => {
    const scoreChange = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const events = getScoreChangeEvents(nums[i], i, nums.length);
        for (const { k, change } of events) {
            scoreChange[k] += change;
        }
    }

    let scoreIncrease = 0,
        maxScoreIncrease = 0,
        maxIndex = 0;

    for (let i = 1; i < scoreChange.length; i++) {
        scoreIncrease += scoreChange[i];
        if (scoreIncrease > maxScoreIncrease) {
            maxScoreIncrease = scoreIncrease;
            maxIndex = i;
        }
    }

    return maxIndex;
};