/*
*
* 48. Rotate Image
*
* https://leetcode.com/problems/rotate-image/

1. Mirror (reverse the rows)
2. Transpose

Input:
1 2 3
4 5 6
7 8 9

Mirror:
7 8 9
4 5 6
1 2 3

Mirror + Transpose = 90 degree clockwise rotation
7 4 1
8 5 2
9 6 3

*/

const rotate = M => {
    M.reverse();
    for (let row = 0; row < M.length; row++) {
      for (let col = 0; col < row; col++) {
        [M[row][col], M[col][row]] = [M[col][row], M[row][col]];
      }
    }
};