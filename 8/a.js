const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let regExp = new RegExp('(\\w{3}) ([\\+|-]\\d+)');

let acc = 0;
let hist = new Map();
let nextMove = 0;

run(0);

function run(move) {
    if (hist.has(move)) {
        console.log('ACC:', acc);
        process.exit(0);
    }
    hist.set(move);
    let [disc, action, value] = arr[move].match(regExp);
    value = Number.parseInt(value);
    switch(action) {
        case 'acc': 
            acc += value
            nextMove++;
            break;
        case 'nop': 
            nextMove++;
            break;
        case 'jmp':
            nextMove += value;
            break; 
    }
    run(nextMove);
}