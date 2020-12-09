const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().trimEnd().split("\n");

let goal = 90433990;
let cycles = 0;

for (let i in array) {
    let range = findRange(array.slice(i));
    if (range !== null) {
        console.log('Cykles', cycles)
        console.log('END range', range);
        let max = Math.max(...range);
        let min = Math.min(...range);
        console.log('Highest: ', max, ' Lowest: ', min);
        console.log('Sum: ', max + min);
        process.exit(0);
    }
}

function findRange(arr) {
    let temp = 0;
    let range = [];
    while (temp < goal) {
        for (let i of arr) {
            cycles++;
            i = Number.parseInt(i);
            temp += i;
            range.push(i);
            if (temp == goal) {
                return range;
            } else if (temp > goal) {
                return null;
            }
        }
    }
}
