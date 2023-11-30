# Merge Sort

1. Divide the array into 1-element arrays
2. Merge the arrays back together, sorting as you go

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Concatenate values into resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements
    // (if we didn't go through the entire left or right array)
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}
```