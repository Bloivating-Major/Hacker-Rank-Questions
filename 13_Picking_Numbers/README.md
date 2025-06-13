# 13. Picking Numbers

## Problem Description
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

### Example
```
Input: a = [4, 6, 5, 3, 3, 1]
Output: 3
```

There are two subarrays meeting the criterion: [4, 5] and [3, 3, 3]. The maximum length subarray has 3 elements.

## Approaches

### 1. Frequency Counter Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(n)
- Count the frequency of each number in the array
- For each number, calculate the length of a subarray containing that number and possibly the number + 1
- Return the maximum length found

### 2. Sorting Approach
- Time Complexity: O(n log n)
- Space Complexity: O(1)
- Sort the array
- For each element, count how many subsequent elements differ by at most 1
- Return the maximum count found

## Explanation
Since the absolute difference between any two elements must be less than or equal to 1, a valid subarray can only contain at most two distinct values that differ by exactly 1. This means we can either have:
1. A subarray with all the same value
2. A subarray with two values that differ by 1

The frequency counter approach leverages this insight by:
1. Counting how many times each number appears in the array
2. For each number, calculating the length of a subarray containing that number and possibly the number + 1
3. Taking the maximum of these lengths

For example, with the array [4, 6, 5, 3, 3, 1]:
- Frequency: {1: 1, 3: 2, 4: 1, 5: 1, 6: 1}
- For 1: length = freq[1] + freq[2] = 1 + 0 = 1
- For 3: length = freq[3] + freq[4] = 2 + 1 = 3
- For 4: length = freq[4] + freq[5] = 1 + 1 = 2
- For 5: length = freq[5] + freq[6] = 1 + 1 = 2
- For 6: length = freq[6] + freq[7] = 1 + 0 = 1
- Maximum length = 3