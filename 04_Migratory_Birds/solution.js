/**
 * Migratory Birds - HackerRank Solution
 * 
 * Problem: Find the most frequent bird type ID. If multiple types have the same
 * maximum frequency, return the smallest ID.
 */

// Optimal Solution - Hash Map Approach
// Time Complexity: O(n), Space Complexity: O(1) since there are only 5 bird types
function migratoryBirds(arr) {
    // Create a frequency counter for each bird type
    const frequency = {};
    
    // Count occurrences of each bird type
    for (const birdType of arr) {
        frequency[birdType] = (frequency[birdType] || 0) + 1;
    }
    
    let maxFrequency = 0;
    let mostFrequentType = Infinity;
    
    // Find the most frequent bird type with the smallest ID
    for (const birdType in frequency) {
        const typeId = parseInt(birdType);
        if (frequency[typeId] > maxFrequency || 
            (frequency[typeId] === maxFrequency && typeId < mostFrequentType)) {
            maxFrequency = frequency[typeId];
            mostFrequentType = typeId;
        }
    }
    
    return mostFrequentType;
}

// Alternative Solution - Array Counter Approach
// Time Complexity: O(n), Space Complexity: O(1)
function migratoryBirdsWithArray(arr) {
    // Since bird types are 1-5, we can use an array for counting
    // Index 0 will be unused, indices 1-5 will store counts for types 1-5
    const typeCount = [0, 0, 0, 0, 0, 0];
    
    // Count occurrences of each bird type
    for (const birdType of arr) {
        typeCount[birdType]++;
    }
    
    let maxCount = 0;
    let result = 0;
    
    // Find the most frequent type with the smallest ID
    // We iterate from 1 to 5 to ensure we get the smallest ID in case of ties
    for (let i = 1; i <= 5; i++) {
        if (typeCount[i] > maxCount) {
            maxCount = typeCount[i];
            result = i;
        }
    }
    
    return result;
}

// Example usage
const arr = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr)); // Output: 4