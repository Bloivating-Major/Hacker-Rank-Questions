/**
 * Divisible Sum Pairs - HackerRank Solution
 * 
 * Problem: Count pairs (i,j) where i < j and ar[i] + ar[j] is divisible by k.
 */

// Brute Force Approach
// Time Complexity: O(n²), Space Complexity: O(1)
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    
    // Check all possible pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check if the sum is divisible by k
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    
    return count;
}

// Optimized Approach using Remainder Frequency
// Time Complexity: O(n), Space Complexity: O(k)
function divisibleSumPairsOptimized(n, k, ar) {
    // Array to store frequency of remainders
    const remainderFreq = new Array(k).fill(0);
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        // Calculate the remainder when current element is divided by k
        const remainder = ar[i] % k;
        
        // Calculate the complementary remainder we need to find
        const complementRemainder = (k - remainder) % k;
        
        // Add the frequency of complementary remainder to our count
        count += remainderFreq[complementRemainder];
        
        // Increment the frequency of the current remainder
        remainderFreq[remainder]++;
    }
    
    return count;
}

// Example usage
const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(n, k, ar)); // Output: 5
console.log(divisibleSumPairsOptimized(n, k, ar)); // Output: 5