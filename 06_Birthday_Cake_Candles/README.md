# 6. Birthday Cake Candles

## Problem Description
You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

### Example
```
Input: candles = [3, 2, 1, 3]
Output: 2
```

The tallest candles are 3 units high. There are 2 candles with this height, so the function returns 2.

## Approaches

### 1. Single Pass Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(1)
- Track the maximum height and count in a single pass
- Update the maximum height and reset count when a taller candle is found
- Increment count when another candle with the current maximum height is found

### 2. Two Pass Approach
- Time Complexity: O(n)
- Space Complexity: O(1)
- First pass: find the maximum height by iterating through the array
- Second pass: count candles with the maximum height
