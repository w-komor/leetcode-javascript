/*
* 787. Cheapest Flights within K Stops
* https://leetcode.com/problems/cheapest-flights-within-k-stops/
*
* Bellman-Ford algorith for directed weighted graphs
*
*/

const findCheapestPrice = (n, flights, src, dst, K) => {
    let cost = Array(n).fill().map((_, i) => i === src ? 0 : Infinity);

    for (let k = 0; k < K + 1; k++) {
        let costCopy = cost.slice(0);
        for (let [from, to, price] of flights) {
            costCopy[to] = Math.min(costCopy[to], cost[from] + price);
        }
        cost = costCopy.slice(0);
    }

    return cost[dst] != Infinity ? cost[dst] : -1
}