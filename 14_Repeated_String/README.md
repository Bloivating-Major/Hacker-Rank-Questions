# 14. Repeated String

## Problem Description
There is a string of lowercase English letters that is repeated infinitely many times. Given an integer n, find and print the number of letter 'a's in the first n letters of the infinite string.

### Example
```
Input: s = "aba", n = 10
Output: 7
```

The first 10 characters of the infinite string are "abaabaabaa". There are 7 occurrences of 'a' in this substring.

## Approaches

### 1. Mathematical Approach (Optimal)
- Time Complexity: O(s.length)
- Space Complexity: O(1)
- Count the number of 'a's in the original string
- Calculate how many complete repetitions of the string fit within n characters
- Count the number of 'a's in the remaining partial repetition
- Combine these counts to get the total

## Explanation
The key insight is that we don't need to actually generate the repeated string, which would be inefficient for large values of n. Instead, we can:

1. Count how many 'a's appear in the original string (let's call this countA)
2. Calculate how many complete repetitions of the string fit within n characters (n / s.length)
3. Calculate how many characters remain in the partial repetition (n % s.length)
4. Count how many 'a's appear in the first (n % s.length) characters of the original string
5. The total count is: (countA × complete repetitions) + count in remaining characters

For example, with s = "aba" and n = 10:
- countA = 2 (there are 2 'a's in "aba")
- complete repetitions = 10 ÷ 3 = 3 (3 complete repetitions of "aba" fit within 10 characters)
- remaining characters = 10 % 3 = 1 (1 character remains in the partial repetition)
- count in remaining characters = 1 (there is 1 'a' in the first 1 character of "aba")
- total count = (2 × 3) + 1 = 7

This approach is efficient because it avoids generating the repeated string, which could be prohibitively large for the given constraints (n could be up to 10^12).