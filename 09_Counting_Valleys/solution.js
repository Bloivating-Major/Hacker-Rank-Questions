/**
 * Counting Valleys - HackerRank Solution
 * 
 * Problem: Count the number of valleys traversed during a hike.
 * A valley is a sequence of consecutive steps below sea level,
 * starting with a step down from sea level and ending with a step up to sea level.
 */

// Optimal Solution
// Time Complexity: O(n), Space Complexity: O(1)
function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;
    
    // Traverse the path
    for (let i = 0; i < steps; i++) {
        // Update altitude based on current step
        if (path[i] === 'U') {
            altitude++;
            
            // If we just came up to sea level (altitude = 0),
            // we must have completed a valley
            if (altitude === 0) {
                valleys++;
            }
        } else if (path[i] === 'D') {
            altitude--;
        }
    }
    
    return valleys;
}

// Alternative Implementation
// Time Complexity: O(n), Space Complexity: O(1)
function countingValleysAlternative(steps, path) {
    let level = 0;
    let valleys = 0;
    
    for (let i = 0; i < steps; i++) {
        // Store previous level to check if we're coming up to sea level
        const prevLevel = level;
        
        // Update level
        level += (path[i] === 'U') ? 1 : -1;
        
        // If we were below sea level and now at sea level, count a valley
        if (prevLevel < 0 && level === 0) {
            valleys++;
        }
    }
    
    return valleys;
}

// Example usage
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1