/*
*
* 849. Maximize distance to closest person
* https://leetcode.com/problems/maximize-distance-to-closest-person
*
* -> create DP of distance to the closest person to the left
* -> create DP of distance to the closest person on the right
* -> return the max of the min of the two DP
*
*/


const maxDistToClosest = seats => {
    let left = new Array(seats.length).fill(0),
        right = new Array(seats.length).fill(0);
    
    left[0] = seats[0] === 1 ? 0 : Infinity;
    right[seats.length - 1] = seats[seats.length - 1] === 1 ? 0 : Infinity;

    for (let i = 1; i < seats.length; i++) {
        left[i] = seats[i] === 1 ? 0 : left[i - 1] + 1;
    }

    for (let i = seats.length - 2; i >= 0; i--) {
        right[i] = seats[i] === 1 ? 0 : right[i + 1] + 1;
    }
    
    return Math.max(
        ...left.map((v, i) => Math.min(v, right[i]))
    );
};