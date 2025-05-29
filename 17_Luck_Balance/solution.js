/**
 * Luck Balance - HackerRank Solution
 * 
 * Problem: Maximize luck balance by strategically choosing which contests to lose,
 * given a constraint on the number of important contests that can be lost.
 */

// Optimal Solution - Greedy Approach
// Time Complexity: O(n log n), Space Complexity: O(n)
function luckBalance(k, contests) {
    let totalLuck = 0;
    const importantContests = [];
    
    // Separate important and unimportant contests
    for (let i = 0; i < contests.length; i++) {
        const luck = contests[i][0];
        const importance = contests[i][1];
        
        if (importance === 0) {
            // For unimportant contests, always lose to gain luck
            totalLuck += luck;
        } else {
            // Store important contests for later processing
            importantContests.push(luck);
        }
    }
    
    // Sort important contests by luck value in descending order
    importantContests.sort((a, b) => b - a);
    
    // Lose the k important contests with the highest luck values
    for (let i = 0; i < importantContests.length; i++) {
        if (i < k) {
            // Lose the contest, gain luck
            totalLuck += importantContests[i];
        } else {
            // Win the contest, lose luck
            totalLuck -= importantContests[i];
        }
    }
    
    return totalLuck;
}

// Alternative Solution - Without Sorting
// Time Complexity: O(n²), Space Complexity: O(1)
function luckBalanceAlternative(k, contests) {
    let totalLuck = 0;
    let importantContestsCount = 0;
    
    // Count important contests and calculate total luck if all contests are lost
    for (let i = 0; i < contests.length; i++) {
        totalLuck += contests[i][0];
        if (contests[i][1] === 1) {
            importantContestsCount++;
        }
    }
    
    // If we need to win some important contests
    if (importantContestsCount > k) {
        // Number of important contests to win
        const mustWin = importantContestsCount - k;
        
        // Create array of luck values for important contests
        const importantLuck = [];
        for (let i = 0; i < contests.length; i++) {
            if (contests[i][1] === 1) {
                importantLuck.push(contests[i][0]);
            }
        }
        
        // Sort important contests by luck value
        importantLuck.sort((a, b) => a - b);
        
        // Subtract twice the luck value for contests we must win
        // (once to remove the addition above, and once for the actual loss)
        for (let i = 0; i < mustWin; i++) {
            totalLuck -= 2 * importantLuck[i];
        }
    }
    
    return totalLuck;
}

// Example usage
const k = 3;
const contests = [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0]
];
console.log(luckBalance(k, contests)); // Output: 29
console.log(luckBalanceAlternative(k, contests)); // Output: 29