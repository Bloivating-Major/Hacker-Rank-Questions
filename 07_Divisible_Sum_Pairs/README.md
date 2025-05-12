# 7. Divisible Sum Pairs

## Problem Description
Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

### Example
```
Input: n = 6, k = 3, ar = [1, 3, 2, 6, 1, 2]
Output: 5
```

The pairs that are divisible by k = 3 are:
- (0,1): ar[0] + ar[1] = 1 + 3 = 4, and 4 is not divisible by 3
- (0,2): ar[0] + ar[2] = 1 + 2 = 3, and 3 is divisible by 3
- (0,3): ar[0] + ar[3] = 1 + 6 = 7, and 7 is not divisible by 3
- (0,4): ar[0] + ar[4] = 1 + 1 = 2, and 2 is not divisible by 3
- (0,5): ar[0] + ar[5] = 1 + 2 = 3, and 3 is divisible by 3
- (1,2): ar[1] + ar[2] = 3 + 2 = 5, and 5 is not divisible by 3
- (1,3): ar[1] + ar[3] = 3 + 6 = 9, and 9 is divisible by 3
- (1,4): ar[1] + ar[4] = 3 + 1 = 4, and 4 is not divisible by 3
- (1,5): ar[1] + ar[5] = 3 + 2 = 5, and 5 is not divisible by 3
- (2,3): ar[2] + ar[3] = 2 + 6 = 8, and 8 is not divisible by 3
- (2,4): ar[2] + ar[4] = 2 + 1 = 3, and 3 is divisible by 3
- (2,5): ar[2] + ar[5] = 2 + 2 = 4, and 4 is not divisible by 3
- (3,4): ar[3] + ar[4] = 6 + 1 = 7, and 7 is not divisible by 3
- (3,5): ar[3] + ar[5] = 6 + 2 = 8, and 8 is not divisible by 3
- (4,5): ar[4] + ar[5] = 1 + 2 = 3, and 3 is divisible by 3

There are 5 pairs that are divisible by 3.

## Approaches

### 1. Brute Force Approach
- Time Complexity: O(n²)
- Space Complexity: O(1)
- Check all possible pairs (i,j) where i < j
- Count pairs where (ar[i] + ar[j]) % k === 0

### 2. Optimized Approach using Remainder Frequency
- Time Complexity: O(n)
- Space Complexity: O(k)
- Use the property that (a + b) % k = 0 if and only if (a % k + b % k) % k = 0
- For each element, count how many previous elements have the complementary remainder