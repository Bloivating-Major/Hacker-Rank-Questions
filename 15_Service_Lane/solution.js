'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Global variable to store width array
let width = [];

/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

// Optimal Solution - Min Value in Range
// Time Complexity: O(n * t), Space Complexity: O(1)
function serviceLane(n, cases) {
    const results = [];
    
    // Process each test case
    for (let i = 0; i < cases.length; i++) {
        const entry = cases[i][0];
        const exit = cases[i][1];
        
        // Find the minimum width in the range [entry, exit]
        let minWidth = width[entry];
        for (let j = entry + 1; j <= exit; j++) {
            if (width[j] < minWidth) {
                minWidth = width[j];
            }
        }
        
        results.push(minWidth);
    }
    
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    // Store width array in the global variable
    width = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    const result = serviceLane(n, cases);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
