/*
* 841. Keys and Rooms
* https://leetcode.com/problems/keys-and-rooms/
*
*/

const canVisitAllRooms = rooms => {
    const visited = new Set(),
        queue = [0];
    
    while (queue.length > 0) {
        const next = queue.pop();
        visited.add(next);
        const nextKeys = rooms[next].filter(id => !visited.has(id));
        nextKeys.forEach(id => queue.push(id));
    }

    return visited.size === rooms.length;
};
