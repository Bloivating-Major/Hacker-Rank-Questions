/**
 * Subarray Division (Chocolate Bar) - HackerRank Solution
 * 
 * Problem: Find the number of ways to divide a chocolate bar such that:
 * - The length of the segment equals m (Ron's birth month)
 * - The sum of integers on the segment equals d (Ron's birth day)
 */

// Optimal Solution - Sliding Window Approach
// Time Complexity: O(n), Space Complexity: O(1)
function birthday(s, d, m) {
    let count = 0;
    
    // Edge case: if chocolate bar is smaller than required length
    if (s.length < m) return 0;
    
    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < m; i++) {
        windowSum += s[i];
    }
    
    // Check if first window matches criteria
    if (windowSum === d) count++;
    
    // Slide the window through the array
    for (let i = m; i < s.length; i++) {
        windowSum = windowSum + s[i] - s[i - m]; // Add new element, remove oldest
        if (windowSum === d) count++;
    }
    
    return count;
}

// Alternative Solution - Brute Force Approach
// Time Complexity: O(n*m), Space Complexity: O(1)
function birthdayBruteForce(s, d, m) {
    let count = 0;
    
    // Check every possible segment of length m
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) count++;
    }
    
    return count;
}

// Example usage
const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;
console.log(birthday(s, d, m)); // Output: 2