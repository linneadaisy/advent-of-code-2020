const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let regExp = new RegExp('(\\w{3}) ([\\+|-]\\d+)');

let acc = 0;
let next = 0;

let hist = new Map();
let changeIndex = new Map();
let hasChange = false;

while(run(next)) {}

function run(i) {
    if (hist.has(i)) {
        next = 0;
        acc = 0;
        hist.clear();
        hasChange = false;
        return true;
    }
    hist.set(i);
    let [disc, action, value] = arr[i].match(regExp);
    value = Number.parseInt(value);
    action = changeAction(action, i);
    switch(action) {
        case 'acc': 
            acc += value;
            next++;
            break;
        case 'nop': 
            next++
            break;
        case 'jmp':
            next += value;
            break; 
    }

    if (i == arr.length - 1) {
        console.log('ACC:', acc, ' program done!');
        return false;
    }
    return true;
}

function changeAction(action, i) {
    if (action !== 'acc' && !changeIndex.has(i) && !hasChange) {
        changeIndex.set(i);
        hasChange = true;
        return action == 'nop' ? 'jmp' : 'nop';
    }
    return action;
}