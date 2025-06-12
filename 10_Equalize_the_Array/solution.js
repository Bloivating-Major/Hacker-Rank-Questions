/**
 * Equalize the Array - HackerRank Solution
 * 
 * Problem: Determine the minimum number of elements to delete to leave only elements of equal value.
 */

// Optimal Solution - Frequency Counter Approach
// Time Complexity: O(n), Space Complexity: O(n)
function equalizeArray(arr) {
    // Create a frequency counter for each element
    const frequency = {};
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Find the element with the maximum frequency
    let maxFrequency = 0;
    for (const num in frequency) {
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    }
    
    // Minimum deletions = total elements - max frequency
    return arr.length - maxFrequency;
}

// Alternative Solution - Array-based Frequency Counter
// Time Complexity: O(n), Space Complexity: O(max(arr))
function equalizeArrayAlternative(arr) {
    // Find the maximum value in the array
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    
    // Create a frequency array (0 to maxValue)
    const frequency = new Array(maxValue + 1).fill(0);
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]]++;
    }
    
    // Find the maximum frequency
    let maxFrequency = 0;
    for (let i = 0; i <= maxValue; i++) {
        if (frequency[i] > maxFrequency) {
            maxFrequency = frequency[i];
        }
    }
    
    // Minimum deletions = total elements - max frequency
    return arr.length - maxFrequency;
}

// Example usage
const arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr)); // Output: 2
console.log(equalizeArrayAlternative(arr)); // Output: 2