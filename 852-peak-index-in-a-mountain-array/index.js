/*
* 852. Peak Index in a Mountain Array
* https://leetcode.com/problems/peak-index-in-a-mountain-array/
*
*/

const peakIndexInMountainArray = arr => {
    let left = 1,
        right = arr.length - 1;

    while (right - left > 1) {
        const mid = Math.floor((right + left) / 2);
        const rising = arr[mid] > arr[mid - 1];
        const falling = arr[mid] > arr[mid + 1];
        if (rising) {
            left = mid;
            if (falling) break;
        } else {
            right = mid;
        }
    }

    return left;
};
