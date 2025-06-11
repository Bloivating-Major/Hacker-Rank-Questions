# 9. Counting Valleys

## Problem Description
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly `steps` steps, for every step it was noted if it was an uphill ('U') or a downhill ('D') step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude.

We define the following terms:
- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

### Example
```
Input: steps = 8, path = "UDDDUDUU"
Output: 1
```

The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 1 unit high. Finally, the hiker returns to sea level and ends the hike.

## Approaches

### 1. Altitude Tracking Approach
- Time Complexity: O(n)
- Space Complexity: O(1)
- Track current altitude as we traverse the path
- When we step up ('U') and reach sea level (altitude = 0), we've just completed a valley
- Count these occurrences to get the number of valleys

### 2. Level Comparison Approach
- Time Complexity: O(n)
- Space Complexity: O(1)
- Track current level and previous level
- When previous level is below sea level and current level is at sea level, we've completed a valley
- Count these occurrences to get the number of valleys

## Visual Representation
For the example "UDDDUDUU":
```
Step:     1   2   3   4   5   6   7   8
Path:     U   D   D   D   U   D   U   U
Level:    1   0  -1  -2  -1  -2  -1   0
          _       
         /  \
_/‾\   /    \
     \/      ‾‾\_ 
                 \
                  ‾
```
The hiker traverses 1 valley (steps 2-6).