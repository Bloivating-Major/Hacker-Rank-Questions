# 2. Simple Array Sum

## Problem Description
Given an array of integers, find the sum of its elements.

### Example
```
Input: ar = [1, 2, 3, 4, 10, 11]
Output: 31
```

The sum of all elements is 1 + 2 + 3 + 4 + 10 + 11 = 31.

## Approaches

### 1. Iterative Approach (Basic)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Iterate through the array and add each element to a running sum

### 2. Using Array.reduce() (Modern JavaScript)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Use JavaScript's built-in reduce method to sum all elements