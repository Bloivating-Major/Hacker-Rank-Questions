/**
 * Sales by Match - HackerRank Solution
 * 
 * Problem: Count how many pairs of socks with matching colors can be formed
 * from a given array of sock colors.
 */

// Optimal Solution - Hash Map Approach
// Time Complexity: O(n), Space Complexity: O(n)
function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;
    
    // Count occurrences of each color
    for (const color of ar) {
        colorCount[color] = (colorCount[color] || 0) + 1;
    }
    
    // Count pairs by dividing each color count by 2
    for (const color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }
    
    return pairs;
}

// Alternative Solution - Set Approach
// Time Complexity: O(n), Space Complexity: O(n)
function sockMerchantWithSet(n, ar) {
    const unpaired = new Set();
    let pairs = 0;
    
    for (const color of ar) {
        if (unpaired.has(color)) {
            unpaired.delete(color);
            pairs++;
        } else {
            unpaired.add(color);
        }
    }
    
    return pairs;
}

// Less Optimal Solution - Sorting Approach
// Time Complexity: O(n log n), Space Complexity: O(1)
function sockMerchantWithSorting(n, ar) {
    ar.sort((a, b) => a - b);
    
    let pairs = 0;
    let i = 0;
    
    while (i < n - 1) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
            i += 2;
        } else {
            i++;
        }
    }
    
    return pairs;
}

// Example usage
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); // Output: 3