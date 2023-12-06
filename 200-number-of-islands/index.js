/*
* 200. Number of Islands
* https://leetcode.com/problems/number-of-islands/
*
*/

const numIslands = grid => {
    let numberOfIslands = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;
};