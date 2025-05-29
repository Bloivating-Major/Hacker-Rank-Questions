# 17. Luck Balance

## Problem Description
Lena is preparing for a coding competition with preliminary contests. Each contest has a luck value L[i] and an importance rating T[i] (0 or 1). If she wins a contest, her luck decreases by L[i]; if she loses, her luck increases by L[i]. She can lose at most k important contests (where T[i] = 1). What is the maximum luck balance she can achieve?

### Example
```
Input: 
k = 3
contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]

Output: 29
```

Explanation:
- There are 4 important contests (T[i] = 1) with luck values 5, 2, 1, and 8.
- There are 2 unimportant contests (T[i] = 0) with luck values 10 and 5.
- Lena can lose at most 3 important contests.
- To maximize luck, she should:
  - Lose all unimportant contests: +10 +5 = +15 luck
  - Lose the 3 important contests with the highest luck values (8, 5, 2): +8 +5 +2 = +15 luck
  - Win the remaining important contest (1): -1 luck
  - Total luck balance: 15 + 15 - 1 = 29

## Approaches

### 1. Greedy Approach (Optimal)
- Time Complexity: O(n log n), Space Complexity: O(n)
- Separate important and unimportant contests
- For unimportant contests, always lose to gain luck
- Sort important contests by luck value in descending order
- Lose the k important contests with the highest luck values
- Win the remaining important contests

### 2. Alternative Approach
- Time Complexity: O(n²), Space Complexity: O(1)
- Calculate total luck if all contests are lost
- Determine how many important contests must be won
- Sort important contests by luck value in ascending order
- Subtract twice the luck value for contests that must be won

## Explanation
The key insight is to maximize luck by:
1. Always losing unimportant contests (since there's no penalty)
2. Strategically choosing which important contests to lose

For important contests, we want to lose those with the highest luck values (to gain the most luck) and win those with the lowest luck values (to minimize the luck lost).

The greedy approach sorts the important contests by luck value and chooses to lose the k contests with the highest luck values, while winning the rest.

For example, with k = 3 and contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]:
- Unimportant contests (always lose): +10 +5 = +15 luck
- Important contests (sorted by luck): [8, 5, 2, 1]
- Lose the 3 highest: +8 +5 +2 = +15 luck
- Win the lowest: -1 luck
- Total: 15 + 15 - 1 = 29