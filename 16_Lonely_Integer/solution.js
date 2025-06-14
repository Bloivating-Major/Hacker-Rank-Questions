/**
 * Lonely Integer - HackerRank Solution
 * 
 * Problem: Find the unique element in an array where all other elements occur twice.
 */

// Optimal Solution - XOR Approach
// Time Complexity: O(n), Space Complexity: O(1)
function lonelyinteger(a) {
    let result = 0;
    
    // XOR all elements in the array
    for (let i = 0; i < a.length; i++) {
        result ^= a[i];
    }
    
    // The result will be the unique element
    return result;
}

// Alternative Solution - Hash Map Approach
// Time Complexity: O(n), Space Complexity: O(n)
function lonelyintegerWithHashMap(a) {
    const frequency = {};
    
    // Count occurrences of each element
    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Find the element that occurs only once
    for (const num in frequency) {
        if (frequency[num] === 1) {
            return parseInt(num);
        }
    }
    
    return -1; // Should not reach here given the problem constraints
}

// Example usage
const a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a)); // Output: 4
console.log(lonelyintegerWithHashMap(a)); // Output: 4