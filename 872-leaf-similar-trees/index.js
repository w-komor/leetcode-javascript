/*
* 872. Leaf-Similar Trees
* https://leetcode.com/problems/leaf-similar-trees/
*
* To get the array of leaf values, we do in-order traversal of the tree. We add a value to an array
* only if it is a leaf node. A leaf node has no left and no right children.
*
*/

const leafValues = node => {
    if (!node) return [];
    if (!node.left && !node.right) return [node.val];
    return [...leafValues(node.left), ...leafValues(node.right)];
}

const leafSimilar = (root1, root2) => {
    const leafVal1 = leafValues(root1);
    const leafVal2 = leafValues(root2);
    return leafVal1.length === leafVal2.length
        && !leafVal1.some((val, index) => val !== leafVal2[index]);
};
