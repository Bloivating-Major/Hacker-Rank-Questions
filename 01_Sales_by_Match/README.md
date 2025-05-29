# 1. Sales by Match

## Problem Description
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

### Example
```
Input: ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Output: 3
```

There is one pair of color 10, one of color 20, and one of color 10 again. There are three odd socks left, one of each color. The number of pairs is 3.

## Approaches

### 1. Hash Map Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(n)
- Count frequency of each color and calculate pairs

### 2. Set Approach
- Time Complexity: O(n)
- Space Complexity: O(n)
- Track unpaired socks and form pairs when matches are found

### 3. Sorting Approach
- Time Complexity: O(n log n)
- Space Complexity: O(1)
- Sort array and count adjacent matching colors