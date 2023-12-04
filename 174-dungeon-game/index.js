/*
* 174. Dungeon Game
* https://leetcode.com/problems/dungeon-game/
*
*/

const calculateMinimumHP = dungeon => {
    const rows = dungeon.length;
    const cols = dungeon[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    
    dp[rows - 1][cols - 1] = Math.max(1, 1 - dungeon[rows - 1][cols - 1]);

    for (let i = rows - 2; i >= 0; i--) {
        dp[i][cols - 1] = Math.max(1, dp[i + 1][cols - 1] - dungeon[i][cols - 1]);
    }
    for (let j = cols - 2; j >= 0; j--) {
        dp[rows - 1][j] = Math.max(1, dp[rows - 1][j + 1] - dungeon[rows - 1][j]);
    }

    for (let i = rows - 2; i >= 0; i--) {
        for (let j = cols - 2; j >= 0; j--) {
            const minHealthOnExit = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(1, minHealthOnExit - dungeon[i][j]);
        }
    }

    return dp[0][0];
}