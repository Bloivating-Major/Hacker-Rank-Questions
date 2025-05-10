# 3. Subarray Division (Chocolate Bar)

## Problem Description
Two children, Lily and Ron, want to share a chocolate bar. Each square has an integer on it. Lily wants to find segments where:
- The length of the segment equals Ron's birth month (m)
- The sum of integers on the segment equals Ron's birth day (d)

Determine how many ways she can divide the chocolate.

### Example
```
Input: s = [2, 2, 1, 3, 2], d = 4, m = 2
Output: 2
```

There are two segments that satisfy the criteria: [2,2] and [1,3].

## Approaches

### 1. Sliding Window Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Maintain a window of size m and slide it through the array
- For each position, check if the sum equals d

### 2. Brute Force Approach
- Time Complexity: O(n*m)
- Space Complexity: O(1)
- Check every possible segment of length m
- Calculate the sum for each segment and compare with d