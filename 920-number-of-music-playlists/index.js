/*
* 920. Number of Music Playlists
* https://leetcode.com/problems/number-of-music-playlists/
*
*/

const MOD = 10 ** 9 + 7;

const numMusicPlaylists = (n, goal, k) => {
    const dp = new Array(goal + 1).fill(0).map(
        _ => new Array(n + 1).fill(0)
    );
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        const numSongs = Math.min(i, n);
        for (let j = 1; j <= numSongs; j++) {
            dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % MOD;
            if (j > k) dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
        }
    }

    return dp[goal][n];
};
