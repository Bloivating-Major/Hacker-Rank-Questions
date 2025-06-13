/**
 * Picking Numbers - HackerRank Solution
 * 
 * Problem: Find the longest subarray where the absolute difference 
 * between any two elements is less than or equal to 1.
 */

// Optimal Solution - Frequency Counter Approach
// Time Complexity: O(n), Space Complexity: O(n)
function pickingNumbers(a) {
    // Create a frequency counter
    const frequency = {};
    
    // Count occurrences of each number
    for (const num of a) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    let maxLength = 0;
    
    // Check each number as a potential minimum in a valid subarray
    for (const num in frequency) {
        const currentNum = parseInt(num);
        
        // A subarray can contain the current number and the number + 1
        // (since the absolute difference must be <= 1)
        const currentLength = frequency[currentNum] + (frequency[currentNum + 1] || 0);
        
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}

// Alternative Solution - Sorting Approach
// Time Complexity: O(n log n), Space Complexity: O(1)
function pickingNumbersWithSorting(a) {
    // Sort the array
    a.sort((a, b) => a - b);
    
    let maxLength = 0;
    
    // Try each element as the start of a potential subarray
    for (let i = 0; i < a.length; i++) {
        let count = 1; // Count the current element
        
        // Count elements that differ by at most 1 from the starting element
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] - a[i] <= 1) {
                count++;
            } else {
                break; // Since the array is sorted, we can break early
            }
        }
        
        maxLength = Math.max(maxLength, count);
    }
    
    return maxLength;
}

// Example usage
const a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a)); // Output: 3
console.log(pickingNumbersWithSorting(a)); // Output: 3