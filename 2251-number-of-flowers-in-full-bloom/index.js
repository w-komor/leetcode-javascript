/*
* 2251. Number of Flowers in Full Bloom
* https://leetcode.com/problems/number-of-flowers-in-full-bloom/
*
*/

function bisectRight(arr, x) {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (x < arr[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

const fullBloomFlowers = (flowers, people) => {
    const asc = (a, b) => a - b,
        starts = flowers.map(f => f[0]).sort(asc),
        ends = flowers.map(f => f[1] + 1).sort(asc),
        result = [];

    for (let person of people) {
        let i = bisectRight(starts, person);
        let j = bisectRight(ends, person);
        result.push(i - j);
    }

    return result;
};
