const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n\n');

let sum = 0;
arr.forEach(group => {
    sum += unique(group.replace(/\n/g, "")).length;
})

function unique(str) {
    return ''.concat(...new Set(str))
}

console.log('Total YES:', sum);