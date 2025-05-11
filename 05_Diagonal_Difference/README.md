# 5. Diagonal Difference

## Problem Description
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

### Example
```
Input: arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
Output: 15
```

Left-to-right diagonal: 11 + 5 + (-12) = 4
Right-to-left diagonal: 4 + 5 + 10 = 19
Absolute difference: |4 - 19| = 15

## Approaches

### 1. Single Pass Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Calculate both diagonal sums in a single loop
- For an n×n matrix:
  - Left-to-right diagonal elements are at positions (i,i)
  - Right-to-left diagonal elements are at positions (i,n-1-i)

### 2. Two Separate Loops Approach
- Time Complexity: O(n)
- Space Complexity: O(1)
- Calculate each diagonal sum in a separate loop
- Slightly less efficient but may be more readable