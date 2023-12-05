/*
* 2722. Join Two Arrays by ID
* https://leetcode.com/problems/join-two-arrays-by-id/
*
*/

const join = (...arrs) => {
    let map = new Map();
    for (const arr of arrs) {
        for (const obj of arr) {
            map.set(obj.id, {...map.get(obj.id), ...obj});
        }
    }
    return [...map.values()].sort((left, right) => left.id - right.id);
};
