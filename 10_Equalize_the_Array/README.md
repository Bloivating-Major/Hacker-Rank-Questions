# 10. Equalize the Array

## Problem Description
Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

### Example
```
Input: arr = [3, 3, 2, 1, 3]
Output: 2
```

If we delete elements 2 and 1, all remaining elements will be equal to 3. This requires 2 deletions, which is the minimum possible.

## Approaches

### 1. Frequency Counter Approach (Optimal for general case)
- Time Complexity: O(n)
- Space Complexity: O(n)
- Count the frequency of each element in the array
- Find the element with the maximum frequency
- Minimum deletions = total elements - maximum frequency

### 2. Array-based Frequency Counter (Optimal when array values have a small range)
- Time Complexity: O(n)
- Space Complexity: O(max(arr))
- Find the maximum value in the array
- Create a frequency array of size max+1
- Count occurrences of each element
- Find the maximum frequency
- Minimum deletions = total elements - maximum frequency

## Explanation
To equalize the array, we need to keep the most frequent element and delete all others. The minimum number of deletions is therefore the total number of elements minus the count of the most frequent element.

For example, in [3, 3, 2, 1, 3]:
- Element 3 appears 3 times
- Element 2 appears 1 time
- Element 1 appears 1 time

The most frequent element is 3, appearing 3 times. To equalize the array, we need to delete all other elements (2 and 1), which requires 2 deletions.