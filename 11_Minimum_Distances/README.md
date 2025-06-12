# 11. Minimum Distances

## Problem Description
The distance between two array values is the number of indices between them. Given an array, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.

### Example
```
Input: a = [7, 1, 3, 4, 1, 7]
Output: 3
```

There are two matching pairs of values: 7 and 1. The indices of the 7's are 0 and 5, so their distance is 5. The indices of the 1's are 1 and 4, so their distance is 3. The minimum distance is 3.

## Approaches

### 1. Hash Map Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(n)
- Use a hash map to store the last seen index of each element
- When we encounter an element we've seen before, calculate the distance
- Keep track of the minimum distance found
- Return -1 if no matching pairs are found

### 2. Brute Force Approach
- Time Complexity: O(n²)
- Space Complexity: O(1)
- Check all possible pairs of elements
- For each pair of equal elements, calculate the distance
- Keep track of the minimum distance found
- Return -1 if no matching pairs are found

## Explanation
The optimal approach uses a hash map to track the last seen index of each element. This allows us to calculate distances in a single pass through the array.

For example, with the array [7, 1, 3, 4, 1, 7]:
1. At index 0: We see 7 for the first time, store lastIndex[7] = 0
2. At index 1: We see 1 for the first time, store lastIndex[1] = 1
3. At index 2: We see 3 for the first time, store lastIndex[3] = 2
4. At index 3: We see 4 for the first time, store lastIndex[4] = 3
5. At index 4: We see 1 again, calculate distance = 4 - 1 = 3, update minDistance = 3, update lastIndex[1] = 4
6. At index 5: We see 7 again, calculate distance = 5 - 0 = 5, minDistance remains 3, update lastIndex[7] = 5

The minimum distance found is 3.