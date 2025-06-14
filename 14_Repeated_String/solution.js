/**
 * Repeated String - HackerRank Solution
 * 
 * Problem: Find the number of letter 'a's in the first n letters of an infinitely repeated string.
 */

// Optimal Solution with minimal built-in functions
// Time Complexity: O(s.length), Space Complexity: O(1)
function repeatedString(s, n) {
    // Count 'a's in the original string
    let countInOriginal = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            countInOriginal++;
        }
    }
    
    // Calculate how many complete repetitions of s are in the first n characters
    const completeRepetitions = Math.floor(n / s.length);
    
    // Calculate how many characters from the last partial repetition to include
    const remainingChars = n % s.length;
    
    // Count 'a's in the remaining characters
    let countInRemaining = 0;
    for (let i = 0; i < remainingChars; i++) {
        if (s[i] === 'a') {
            countInRemaining++;
        }
    }
    
    // Total count = (count in original string × number of complete repetitions) + count in remaining characters
    return countInOriginal * completeRepetitions + countInRemaining;
}

// Example usage
const s = "aba";
const n = 10;
console.log(repeatedString(s, n)); // Output: 7
