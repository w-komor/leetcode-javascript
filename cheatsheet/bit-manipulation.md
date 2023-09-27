# Bit Manipulation in JavaScript

## Operators and Their Use

### 1. NOT (~)
Flips all the bits.

```javascript
console.log(~2);  // -3
```

### 2. AND (&)
Returns a 1 in each bit position where both operands have a 1.

```javascript
console.log(5 & 3);  // 1
```
### 3. OR (|)
Returns a 1 in each bit position where at least one operand has a 1.

```javascript
console.log(5 | 3);  // 7
```
### 4. XOR (^)
Returns a 1 in each bit position where only one of the operands has a 1.

```javascript
console.log(5 ^ 3);  // 6
```
### 5. Left Shift (<<)
Shifts the left operand's bits to the left by the number specified by the right operand.

```javascript
console.log(5 << 1);  // 10
```

### 6. Signed Right Shift (>>)
Shifts the left operand's bits to the right by the number specified by the right operand. Maintains the sign bit.

```javascript
console.log(-5 >> 1);  // -3
```
### 7. Unsigned Right Shift (>>>)
Shifts the left operand's bits to the right by the number specified by the right operand. Does not maintain the sign bit (fills with 0s).

```javascript
console.log(-5 >>> 1);  // 2147483645
```
Manipulating Specific Bits
### 8. Setting a bit
To set a bit at the n-th position, OR it with (1 shifted left by n).

```javascript
function setBit(num, position) {
    return num | (1 << position);
}
console.log(setBit(5, 2));  // 5 | (1 << 2) = 5 | 4 = 9
```
### 9. Clearing a bit
To clear a bit at the n-th position, AND it with the NOT of (1 shifted left by n).

```javascript
function clearBit(num, position) {
    return num & ~(1 << position);
}
console.log(clearBit(7, 1));  // 7 & ~(1 << 1) = 7 & ~2 = 5
```
### 10. Toggling a bit
To toggle a bit at the n-th position, XOR it with (1 shifted left by n).

```javascript
function toggleBit(num, position) {
    return num ^ (1 << position);
}
console.log(toggleBit(5, 1));  // 5 ^ (1 << 1) = 5 ^ 2 = 7
```

### 11. Checking a bit
To check if a bit at the n-th position is set:

```javascript
function isBitSet(num, position) {
    return (num & (1 << position)) !== 0;
}
console.log(isBitSet(5, 2));  // 5 & (1 << 2) = 5 & 4 = 4 (not 0, so true)
```

