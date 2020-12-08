const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');
let regExp = new RegExp('(\\w{3}) ([\\+|-]\\d+)');
let acc = 0;
let hist = new Map();
let next = 0;
let runCount = 10;
let changeIndex = 0;

//Bad solution :)
run(0);
function run(i) {
    console.log('Line: ', i, arr[i], ' run:', runCount)
    if (hist.has(i)) {
        console.log('ACC:', acc, 'Looping');
        runCount++;
        changeIndex = 0;
        next = 0;
        acc = 0;
        hist.clear();
        run(0);
    }
    hist.set(i);
    let [disc, action, value] = arr[i].match(regExp);
    value = Number.parseInt(value);
    switch(action) {
        case 'acc':
            acc += value;
            next++;
            break;
        case 'nop':
            next++
            break;
        case 'jmp':
           changeAction() ? next++ : next += value;
           changeIndex++;
           break;
    }
    if (i == arr.length - 1) {
        console.log('ACC:', acc, ' program done!');
        process.exit(0);
    }
    run(next);
}
function changeAction() {
    return changeIndex == runCount;
}