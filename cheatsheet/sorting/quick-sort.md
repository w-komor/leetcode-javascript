```javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right]; // Choosing the rightmost element as pivot
    let i = left - 1; // Pointer for the greater element

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) { // If current element is smaller than pivot
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right); // Place pivot in the middle
    return i + 1; // Return pivot index
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
```