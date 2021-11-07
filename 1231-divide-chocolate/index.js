/*
1231. Divide Chocolate
https://leetcode.com/problems/divide-chocolate/

We are looking for maximum sweetness of the 'worst' piece. For the worst piece:
 - minimum is 1
 - maximum is the average sweetness

We could try every possible solution one by one, but that's O(n). Binary search will be O(log(n)).

At each iteration of binary search, we will check if some worstSweetness is possible.
We can perform this check with a simple greedy algorithm:
 - initialize currentSum = 0 and chunks = 0
 - iterate over the sweetness array and add to currentSum
 - whenever worstSweetness is exceeded, do chunks++ and currentSum = 0
 - at the end, check if chunks > cuts.

There's also a helper method for calculating the average sweetness, to make the main function simpler.
*/

const isPossible = (sweetness, cuts, worstSweetness) => {
    let chunks = 0, currentSweetness = 0;
    for (let s of sweetness) {
        currentSweetness += s;
        if (currentSweetness >= worstSweetness) {
            currentSweetness = 0;
            chunks++;
        }
    }
    return chunks > cuts;
};

const average = (sweetness, cuts) => {
    const sum = sweetness.reduce((a, b) => a + b, 0);
    return Math.floor(sum / (cuts + 1));
};

const maximizeSweetness = (sweetness, cuts) => {
    let left = 1,
        right = average(sweetness, cuts) + 1;
    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2);
        isPossible(sweetness, cuts, mid) ? left = mid : right = mid;
    }
    return left;
};
