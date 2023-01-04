/*
* 2244. Minimum Rounds to Complete All Tasks
* https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
*
*/

class FreqMap {
    constructor(nums) {
        this.map = {};
        for (const n of nums) this.add(n);
    }
    add = n => this.map[n] ? this.map[n]++ : this.map[n] = 1;
}

const rounds = count => count === 1 ? -1 : Math.ceil(count / 3);

const minimumRounds = tasks => {
    const counts = Object.values(new FreqMap(tasks).map);
    let result = 0;

    for (const count of counts) {
        const difficultyRounds = rounds(count);
        if (difficultyRounds === -1) return - 1;
        result += difficultyRounds;
    }

    return result;
};
