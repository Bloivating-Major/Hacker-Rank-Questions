# 4. Migratory Birds

## Problem Description
Given an array of bird sightings where every element represents a bird type ID, determine the ID of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.

### Example
```
Input: arr = [1, 4, 4, 4, 5, 3]
Output: 4
```

Type 4 occurs three times, which is more than any other type. Types 1, 3, and 5 occur once each.

## Approaches

### 1. Hash Map Approach (General Solution)
- Time Complexity: O(n)
- Space Complexity: O(k) where k is the number of unique bird types
- Count frequency of each bird type using a hash map
- Find the type with maximum frequency, choosing the smallest ID in case of ties

### 2. Array Counter Approach (Optimized for this problem)
- Time Complexity: O(n)
- Space Complexity: O(1) since there are only 5 bird types
- Use an array to count occurrences of each bird type (index = type ID)
- Iterate through the array to find the most frequent type
- Since we iterate from smallest to largest ID, we automatically get the smallest ID in case of ties