
const fs = require('fs');
var arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

const seatIds = [];
arr.forEach(seat => {
    seat = seat.replace(/B|R/g,'1').replace(/F|L/g,'0');
    
    let rowNum = parseInt(seat.substring(0, 7), 2);
    let columNum = parseInt(seat.substring(7), 2);

    const seatId = rowNum * 8 + columNum;
    seatIds.push(seatId);
})

console.log("Highest seatID:", seatIds.sort((a, b) => a - b).reverse()[0]);