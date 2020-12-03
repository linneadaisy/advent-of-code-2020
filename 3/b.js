const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n');

const rowLength = arr[0].length;

const rules = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2}
];
let totalHits = [];
rules.forEach(rule => {
    totalHits.push(caclRout(rule.right, rule.down));
});

function caclRout(right, down) {
    let hit = 0;
    let pos = 0;
    for (let i = 0; i < arr.length; i += down) {        
        if (arr[i].charAt(pos % rowLength) == '#') {
            hit++;
        } 
        pos += right;
    }
    return hit;
}
function multiply(array) {
    let product = 1;

    array.forEach(n => {
        product = product * n;
    }); 
    return product;
}
console.log("Trees hit:", multiply(totalHits));