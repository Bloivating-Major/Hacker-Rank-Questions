/**
 * Simple Array Sum - HackerRank Solution
 * 
 * Problem: Find the sum of all elements in an array.
 */

// Optimal Solution - Iterative Approach
// Time Complexity: O(n), Space Complexity: O(1)
function simpleArraySum(ar) {
    let sum = 0;
    
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    
    return sum;
}

// Alternative Solution - Reduce Method
// Time Complexity: O(n), Space Complexity: O(1)
function simpleArraySumWithReduce(ar) {
    return ar.reduce((sum, current) => sum + current, 0);
}

// Example usage
const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar)); // Output: 31
console.log(simpleArraySumWithReduce(ar)); // Output: 31