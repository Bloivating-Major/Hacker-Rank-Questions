# 15. Service Lane

## Problem Description
A service lane runs parallel to a highway. The width of the service lane varies along its length. Given an array of widths at points along the road and a list of entry and exit points, calculate the maximum size vehicle that can travel each segment of the service lane safely.

### Example
```
Input: 
width = [2, 3, 1, 2, 3, 2, 3, 3]
cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]

Output: [1, 2, 3, 2, 1]
```

Explanation:
1. For entry=0, exit=3: The segment includes widths [2, 3, 1, 2]. The minimum width is 1.
2. For entry=4, exit=6: The segment includes widths [3, 2, 3]. The minimum width is 2.
3. For entry=6, exit=7: The segment includes widths [3, 3]. The minimum width is 3.
4. For entry=3, exit=5: The segment includes widths [2, 3, 2]. The minimum width is 2.
5. For entry=0, exit=7: The segment includes all widths [2, 3, 1, 2, 3, 2, 3, 3]. The minimum width is 1.

## Approaches

### 1. Min Value in Range (Optimal)
- Time Complexity: O(n * t), where n is the maximum segment length and t is the number of test cases
- Space Complexity: O(1)
- For each test case, find the minimum width in the range [entry, exit]
- Return the minimum width for each test case

### 2. Using Built-in Functions
- Time Complexity: O(n * t)
- Space Complexity: O(n)
- Use slice() to extract the segment and Math.min() to find the minimum width
- Return the minimum width for each test case

## Explanation
The key insight is that the maximum size vehicle that can travel through a segment is limited by the narrowest point in that segment. Therefore, we need to find the minimum width value in each specified range.

For example, with width = [2, 3, 1, 2, 3, 2, 3, 3] and cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]:

1. For entry=0, exit=3: We check widths[0] through widths[3], which are [2, 3, 1, 2]. The minimum is 1.
2. For entry=4, exit=6: We check widths[4] through widths[6], which are [3, 2, 3]. The minimum is 2.
3. For entry=6, exit=7: We check widths[6] through widths[7], which are [3, 3]. The minimum is 3.
4. For entry=3, exit=5: We check widths[3] through widths[5], which are [2, 3, 2]. The minimum is 2.
5. For entry=0, exit=7: We check all widths, which are [2, 3, 1, 2, 3, 2, 3, 3]. The minimum is 1.

The first approach manually finds the minimum in each range, while the second approach uses JavaScript's built-in functions to achieve the same result.