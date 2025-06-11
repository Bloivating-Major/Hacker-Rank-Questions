/**
 * Mini-Max Sum - HackerRank Solution
 * 
 * Problem: Find the minimum and maximum values that can be calculated by 
 * summing exactly four of the five integers.
 */

// Optimal Solution - Single Pass
// Time Complexity: O(n), Space Complexity: O(1)
function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    
    // Find min, max, and total sum in a single pass
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    
    // Min sum is total sum minus max value
    // Max sum is total sum minus min value
    const minSum = sum - max;
    const maxSum = sum - min;
    
    console.log(minSum + " " + maxSum);
}

// Alternative Solution - Sorting Approach
// Time Complexity: O(n log n), Space Complexity: O(1)
function miniMaxSumWithSorting(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    let minSum = 0;
    let maxSum = 0;
    
    // Calculate min sum (first 4 elements)
    for (let i = 0; i < 4; i++) {
        minSum += arr[i];
    }
    
    // Calculate max sum (last 4 elements)
    for (let i = 1; i < 5; i++) {
        maxSum += arr[i];
    }
    
    console.log(minSum + " " + maxSum);
}

// Example usage
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Output: 10 14