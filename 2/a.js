const fs = require('fs');
var arr = fs.readFileSync('input.txt').toString().split('\n');

//const regExp = new RegExp(/([0-9]*)-([0-9]*)\s(\w):\s(\w*)/);
var correct = 0;
var inCorrect = 0;
arr.forEach(row => {
    var [min, max, char, pass] = row.split(/(?:-| |: )+/);
    min = Number.parseInt(min);
    max = Number.parseInt(max);

    var re = new RegExp(char, 'g');
    var numOfChar = (pass.match(re)||[]).length;

    if ((numOfChar >= min) && (numOfChar <= max)) {
        correct++;
    } else {
        inCorrect++;
    }
});

console.log("OK passwords:", correct);
console.log("incorrect passwords:", inCorrect);
console.log("Total passwords:", arr.length);
