const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n');

const rowLength = arr[0].length;
let pos = 0;
let hit = 0;

arr.forEach(row => {
    if (row.charAt(pos % rowLength) == '#') {
        hit++;
    } 
    pos += 3;
});


console.log("Trees hit:", hit);