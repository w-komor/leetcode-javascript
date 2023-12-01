/*
* 332. Reconstruct Itinerary
* https://leetcode.com/problems/reconstruct-itinerary/
*
*/

const findItinerary = tickets => {
    // Create adjacency list
    let map = {};
    for (let ticket of tickets) {
        let [from, to] = ticket;
        if (!map[from]) map[from] = [];
        map[from].push(to);
    }

    // Sort destinations in lexical order
    for (let from in map) map[from].sort();

    let result = [];

    // DFS function to visit cities and construct the itinerary
    const visit = airport => {
        // Check if this airport has any unvisited neighboring airports
        while (map[airport] && map[airport].length > 0) {
            let nextAirport = map[airport].shift();
            visit(nextAirport);
        }
        // This ensures correct order of result
        result.unshift(airport);
    };

    visit('JFK');

    return result;
};