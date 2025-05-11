/**
 * Diagonal Difference - HackerRank Solution
 * 
 * Problem: Calculate the absolute difference between the sums of the 
 * two diagonals of a square matrix.
 */

// Optimal Solution - Single Pass
// Time Complexity: O(n), Space Complexity: O(1)
function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    const n = arr.length;
    
    // Calculate both diagonal sums in a single pass
    for (let i = 0; i < n; i++) {
        // Left-to-right diagonal: elements where row index equals column index
        leftDiagonalSum += arr[i][i];
        
        // Right-to-left diagonal: elements where row index + column index = n-1
        rightDiagonalSum += arr[i][n - 1 - i];
    }
    
    // Return absolute difference
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

// Alternative Solution - Two Separate Loops
// Time Complexity: O(n), Space Complexity: O(1)
function diagonalDifferenceAlternative(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    const n = arr.length;
    
    // Calculate left-to-right diagonal sum
    for (let i = 0; i < n; i++) {
        leftDiagonalSum += arr[i][i];
    }
    
    // Calculate right-to-left diagonal sum
    for (let i = 0; i < n; i++) {
        rightDiagonalSum += arr[i][n - 1 - i];
    }
    
    // Return absolute difference
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

// Example usage
const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(arr)); // Output: 15