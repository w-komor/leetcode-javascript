/*
* 1985. Find the Kth Largest Integer in the Array
* https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
*
*/

var kthLargestNumber = function(nums, k) {
    const n = nums.length;
    k = n - k; 
    
    return quickSelect(nums, k, 0, n - 1);
    
    function quickSelect(arr, selectIdx, left, right) {
        const pivotIdx = Math.floor(Math.random() * (right - left + 1) + left);
        const pivotNum = arr[pivotIdx];
        
        swap(arr, pivotIdx, right);
        
        let swapIdx = left;
        
        for (let i = left; i < right; i++) {
            if (compare(arr[i], pivotNum) < 0) {
                swap(arr, swapIdx, i);
                swapIdx++;
            }
        }
        
        swap(arr, swapIdx, right);
        
        if (swapIdx === selectIdx) return arr[selectIdx];
        
        if (swapIdx > selectIdx) return quickSelect(arr, selectIdx, left, swapIdx - 1);
        if (swapIdx < selectIdx) return quickSelect(arr, selectIdx, swapIdx + 1, right);
    }
    
    
    function compare(numStr1, numStr2) {
        if (numStr1.length > numStr2.length) return 1;
        if (numStr2.length > numStr1.length) return -1;
        
        return numStr1.localeCompare(numStr2);
    }
    
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};