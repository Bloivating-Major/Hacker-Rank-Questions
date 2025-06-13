# 12. Beautiful Triplets

## Problem Description
Given a sequence of integers and a value d, a triplet (arr[i], arr[j], arr[k]) is beautiful if:
- i < j < k
- arr[j] - arr[i] = arr[k] - arr[j] = d

Count the number of beautiful triplets in the sequence.

### Example
```
Input: d = 3, arr = [1, 2, 4, 5, 7, 8, 10]
Output: 3
```

The beautiful triplets are:
1. (1, 4, 7): 4 - 1 = 3, 7 - 4 = 3
2. (2, 5, 8): 5 - 2 = 3, 8 - 5 = 3
3. (4, 7, 10): 7 - 4 = 3, 10 - 7 = 3

## Approaches

### 1. Hash Set Approach (Optimal)
- Time Complexity: O(n)
- Space Complexity: O(n)
- Create a set of all elements for O(1) lookups
- For each element arr[i], check if arr[i] + d and arr[i] + 2*d exist in the set
- If both exist, we have a beautiful triplet

### 2. Brute Force Approach
- Time Complexity: O(n³)
- Space Complexity: O(1)
- Check all possible triplets (i, j, k) where i < j < k
- Count triplets where arr[j] - arr[i] = arr[k] - arr[j] = d

### 3. Two Pointers Approach
- Time Complexity: O(n²)
- Space Complexity: O(1)
- For each element arr[i], find arr[j] such that arr[j] - arr[i] = d
- Then find arr[k] such that arr[k] - arr[j] = d
- Count all such triplets

## Explanation
The optimal approach leverages the fact that the array is sorted and the beautiful triplet condition can be rewritten as:
- arr[j] = arr[i] + d
- arr[k] = arr[j] + d = arr[i] + 2*d

This means for any element arr[i], we just need to check if arr[i] + d and arr[i] + 2*d exist in the array. Using a hash set allows us to do these checks in O(1) time.

For example, with d = 3 and arr = [1, 2, 4, 5, 7, 8, 10]:
1. For arr[0] = 1: Check if 1+3=4 and 1+6=7 exist. They do, so count++.
2. For arr[1] = 2: Check if 2+3=5 and 2+6=8 exist. They do, so count++.
3. For arr[2] = 4: Check if 4+3=7 and 4+6=10 exist. They do, so count++.
4. For arr[3] = 5: Check if 5+3=8 and 5+6=11 exist. 11 doesn't exist, so no increment.
5. For arr[4] = 7: Check if 7+3=10 and 7+6=13 exist. 13 doesn't exist, so no increment.
6. For arr[5] = 8: Check if 8+3=11 and 8+6=14 exist. Neither exists, so no increment.
7. For arr[6] = 10: Check if 10+3=13 and 10+6=16 exist. Neither exists, so no increment.

Total count = 3.