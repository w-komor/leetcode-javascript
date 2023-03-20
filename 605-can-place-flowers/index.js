/*
* 605. Can Place Flowers
* https://leetcode.com/problems/can-place-flowers/
*
*/

const canPlaceFlowers = (flowerbed, n) => {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const isFirstPosition = i === 0;
        const isLastPosition = i === flowerbed.length - 1;
        const isPreviousPositionEmpty = isFirstPosition || flowerbed[i - 1] === 0;
        const isNextPositionEmpty = isLastPosition || flowerbed[i + 1] === 0;

        if (flowerbed[i] === 0 && isPreviousPositionEmpty && isNextPositionEmpty) {
            flowerbed[i] = 1;
            count++;
        }

        if (count >= n) {
            return true;
        }
    }

    return false;
};