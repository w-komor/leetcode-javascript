/*
* 113. Path Sum II
* https://leetcode.com/problems/path-sum-ii/
*
*/

const pathSum = (root, targetSum) => {
    const results = [];

    const dfs = (node, target, tempList = []) => {
        if (!node) return;
        if (!node.left && !node.right && target === node.val) {
            results.push([...tempList, node.val]);
        }

        tempList.push(node.val);
        dfs(node.left, target - node.val, tempList);
        dfs(node.right, target - node.val, tempList);
        tempList.pop();
    }

    dfs(root, targetSum);

    return results;
};