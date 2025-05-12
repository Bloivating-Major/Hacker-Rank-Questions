/**
 * Birthday Cake Candles - HackerRank Solution
 * 
 * Problem: Count how many candles are the tallest.
 */

// Optimal Solution - Single Pass
// Time Complexity: O(n), Space Complexity: O(1)
function birthdayCakeCandles(candles) {
    let maxHeight = 0;
    let count = 0;
    
    // Find the tallest candle height and count occurrences in a single pass
    for (let i = 0; i < candles.length; i++) {
        const height = candles[i];
        if (height > maxHeight) {
            // Found a new maximum height
            maxHeight = height;
            count = 1; // Reset count to 1
        } else if (height === maxHeight) {
            // Found another candle with the maximum height
            count++;
        }
    }
    
    return count;
}

// Alternative Solution - Two Pass Approach without built-in functions
// Time Complexity: O(n), Space Complexity: O(1)
function birthdayCakeCandlesTwoPass(candles) {
    // First pass: find the maximum height
    let maxHeight = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];
        }
    }
    
    // Second pass: count candles with the maximum height
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles)); // Output: 2
