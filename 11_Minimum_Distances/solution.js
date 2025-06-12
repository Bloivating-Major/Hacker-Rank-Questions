/**
 * Minimum Distances - HackerRank Solution
 * 
 * Problem: Find the minimum distance between any pair of equal elements in the array.
 * If no such value exists, return -1.
 */

// Optimal Solution - Hash Map Approach
// Time Complexity: O(n), Space Complexity: O(n)
function minimumDistances(a) {
    // Map to store the last seen index of each element
    const lastIndex = {};
    let minDistance = Infinity;
    
    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        
        // If we've seen this element before, calculate the distance
        if (lastIndex[num] !== undefined) {
            const distance = i - lastIndex[num];
            minDistance = Math.min(minDistance, distance);
        }
        
        // Update the last seen index of this element
        lastIndex[num] = i;
    }
    
    // If no matching pairs were found, return -1
    return minDistance === Infinity ? -1 : minDistance;
}

// Alternative Solution - Brute Force Approach
// Time Complexity: O(n²), Space Complexity: O(1)
function minimumDistancesBruteForce(a) {
    let minDistance = Infinity;
    
    // Check all possible pairs
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            // If elements are equal, calculate distance
            if (a[i] === a[j]) {
                const distance = j - i;
                minDistance = Math.min(minDistance, distance);
            }
        }
    }
    
    // If no matching pairs were found, return -1
    return minDistance === Infinity ? -1 : minDistance;
}

// Example usage
const a = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(a)); // Output: 3
console.log(minimumDistancesBruteForce(a)); // Output: 3