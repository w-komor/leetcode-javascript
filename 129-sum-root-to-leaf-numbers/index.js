/*
* 129. Sum Root to Leaf Numbers
* https://leetcode.com/problems/sum-root-to-leaf-numbers/
*
*/

const sumNumbers = (root, numsSoFar = []) => {
    if (!root) return 0;
    const soFar = [...numsSoFar, root.val];
    if (!root.left && !root.right) return parseInt(soFar.join(''));
    return sumNumbers(root.left, soFar) + sumNumbers(root.right, soFar)
};
