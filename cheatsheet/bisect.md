# Bisect

Bisect functions are used to search for an isertion point for an item in a sorted list.

They are the same as bisect_left and bisect_right in Python.

## Bisect Left

```javascript
function bisectLeft(array, x) {
    let low = 0,
        high = array.length;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] < x) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
}
```

## Bisect Right

```javascript
function bisectRight(array, x) {
    let low = 0,
        high = array.length;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (x < array[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
}
```