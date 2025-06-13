/**
 * Beautiful Triplets - HackerRank Solution
 * 
 * Problem: Count the number of beautiful triplets in a sequence.
 * A triplet (arr[i], arr[j], arr[k]) is beautiful if:
 * - i < j < k
 * - arr[j] - arr[i] = arr[k] - arr[j] = d
 */

// Optimal Solution - Hash Set Approach
// Time Complexity: O(n), Space Complexity: O(n)
function beautifulTriplets(d, arr) {
    // Create a set for O(1) lookups
    const numSet = new Set(arr);
    let count = 0;
    
    // For each element, check if it can be the first element of a beautiful triplet
    for (let i = 0; i < arr.length; i++) {
        // If we can find arr[i] + d and arr[i] + 2*d in the set, we have a beautiful triplet
        if (numSet.has(arr[i] + d) && numSet.has(arr[i] + 2 * d)) {
            count++;
        }
    }
    
    return count;
}

// Alternative Solution - Brute Force Approach
// Time Complexity: O(n³), Space Complexity: O(1)
function beautifulTripletsBruteForce(d, arr) {
    let count = 0;
    
    // Check all possible triplets
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            // Check if the first condition is met
            if (arr[j] - arr[i] === d) {
                for (let k = j + 1; k < arr.length; k++) {
                    // Check if the second condition is met
                    if (arr[k] - arr[j] === d) {
                        count++;
                    }
                }
            }
        }
    }
    
    return count;
}

// Improved Alternative - Two Pointers Approach
// Time Complexity: O(n²), Space Complexity: O(1)
function beautifulTripletsImproved(d, arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        // Find j such that arr[j] - arr[i] = d
        let j = i + 1;
        while (j < arr.length && arr[j] - arr[i] < d) {
            j++;
        }
        
        // If we found a valid j, look for k
        if (j < arr.length && arr[j] - arr[i] === d) {
            // Find k such that arr[k] - arr[j] = d
            let k = j + 1;
            while (k < arr.length && arr[k] - arr[j] < d) {
                k++;
            }
            
            // Count all valid k values
            while (k < arr.length && arr[k] - arr[j] === d) {
                count++;
                k++;
            }
        }
    }
    
    return count;
}

// Example usage
const d = 3;
const arr = [1, 2, 4, 5, 7, 8, 10];
console.log(beautifulTriplets(d, arr)); // Output: 3