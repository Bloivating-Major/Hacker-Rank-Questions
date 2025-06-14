# 16. Lonely Integer

## Problem Description
Given an array of integers, where all elements but one occur twice, find the unique element.

### Example
```
Input: a = [1, 2, 3, 4, 3, 2, 1]
Output: 4
```

In the array, all elements appear twice except for 4, which appears only once. Therefore, 4 is the lonely integer.

## Approaches

### 1. XOR Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Use the XOR operation to find the unique element
- XOR has the property that a ^ a = 0 and a ^ 0 = a
- XORing all elements will cancel out the pairs, leaving only the unique element

### 2. Hash Map Approach
- Time Complexity: O(n)
- Space Complexity: O(n)
- Count the frequency of each element using a hash map
- Return the element with a frequency of 1

## Explanation
The XOR approach is particularly elegant for this problem because of the mathematical properties of the XOR operation:
- XOR of a number with itself is 0: a ^ a = 0
- XOR of a number with 0 is the number itself: a ^ 0 = a
- XOR is commutative and associative: a ^ b ^ a = a ^ a ^ b = 0 ^ b = b

When we XOR all elements in the array, the elements that appear twice will cancel out (become 0), and only the unique element will remain.

For example, with a = [1, 2, 3, 4, 3, 2, 1]:
- result = 0
- result ^= 1 → result = 1
- result ^= 2 → result = 3
- result ^= 3 → result = 0
- result ^= 4 → result = 4
- result ^= 3 → result = 7
- result ^= 2 → result = 5
- result ^= 1 → result = 4

The final result is 4, which is the unique element.

The hash map approach is more general and can be extended to find elements with other frequency patterns, but it requires O(n) extra space.