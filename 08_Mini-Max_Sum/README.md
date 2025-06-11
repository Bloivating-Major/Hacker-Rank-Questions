# 8. Mini-Max Sum

## Problem Description
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

### Example
```
Input: arr = [1, 2, 3, 4, 5]
Output: 10 14
```

The minimum sum is 1 + 2 + 3 + 4 = 10 and the maximum sum is 2 + 3 + 4 + 5 = 14.

## Approaches

### 1. Single Pass Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Find the minimum and maximum values in the array in a single pass
- Calculate the total sum of all elements
- Minimum sum = total sum - maximum value
- Maximum sum = total sum - minimum value

### 2. Sorting Approach
- Time Complexity: O(n log n)
- Space Complexity: O(1)
- Sort the array in ascending order
- Minimum sum = sum of first 4 elements
- Maximum sum = sum of last 4 elements