
// Before someone said binary...

const fs = require('fs');
var arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let seatIds = [];
arr.forEach(seat => {
    const row = seat.substring(0, 7);
    const col = seat.substring(7);

    const rowNum = search(127, 'F', row);
    const colNum = search(7, 'L', col);

    seatIds.push(rowNum * 8 + colNum);
})

function search(highest, matcher, str) {
    let h = highest;
    let l = 0;
    let range = highest - 1;
    
    let val = 0;
    
    [...str].forEach((s, i) => {
        range = range / 2;
        if (range % 2 !== 0) {
            range += 1;
        }
        if (s == matcher) {
            h = h - range;
        } else {
            l = range + l;
        } 
        if (i == [...str].length - 1) {
            val = s == matcher ? l : h;
        }
    })
    return val;
}

seatIds = seatIds.sort((a, b) => a - b);

console.log("Highest seatID:", seatIds.reverse()[0]);

seatIds.forEach((s, i) => {
    if (s - seatIds[i + 1] == 2) {
        console.log('My seat:', s - 1);
        process.exit(0);
    }
})