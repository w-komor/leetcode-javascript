/*
* 2279. Maximum Bags with Full Capacity of Rocks
* https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
*
*/

const maximumBags = (capacity, rocks, additionalRocks) => {
    const space = capacity.map((cap, index) => cap - rocks[index]);
    space.sort((a, b) => a - b);

    let bags = 0,
        i = 0;
    while (additionalRocks && i < space.length) {
        if (space[i] > additionalRocks) break;
        bags++;
        additionalRocks -= space[i];
        i++;
    }

    return bags;
};
