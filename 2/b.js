const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n');

const regExp = new RegExp(/([0-9]*)-([0-9]*)\s(\w):\s(\w*)/);

var correct = 0;
var inCorrect = 0;
arr.forEach(row => {
    var [discard, pos1, pos2, char, pass] = row.match(regExp);
    pos1 = Number.parseInt(pos1 - 1);
    pos2 = Number.parseInt(pos2 - 1);

    const firstMatch = pass.charAt(pos1) == char;
    const secondMatch = pass.charAt(pos2) == char;

    if (firstMatch && !secondMatch) {
        correct++;
    } else if (!firstMatch && secondMatch) {
        correct++;
    }
    else {
        inCorrect++;
    }
});

console.log("OK passwords:", correct);
console.log("incorrect passwords:", inCorrect);
console.log("Total passwords:", arr.length);