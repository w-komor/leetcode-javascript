/*
* 95. Unique Binary Search Trees II
* https://leetcode.com/problems/unique-binary-search-trees-ii/
*
*/

const generateTrees = n => {
    return dfs(1, n);
};

const dfs = (min, max) => {
    if (min > max) {
        return [null];
    }

    const result = [];
    for (let i = min; i <= max; i++) {
        const left = dfs(min, i - 1);
        const right = dfs(i + 1, max);
        for (let l of left) {
            for (let r of right) {
                result.push(new TreeNode(i, l, r));
            }
        }
    }

    return result;
};
