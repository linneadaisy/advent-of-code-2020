const fs = require('fs');
const arr = fs.readFileSync('ex.txt').toString().trimEnd().split('\n');

let regExp = new RegExp('(\\w)(\\d+)');

let compass = ['E', 'S', 'W', 'N'];

let northSouth = 0;
let esatWest = 0;

arr.forEach(a => {
    let [disc, action, value] = a.match(regExp);
    value = Number.parseInt(value);
    switch(action) {
        case 'R':
        case 'L':
            rotate(action, value);
            break;
        case 'F':
            move(compass[0], value);
            break;
        default:
            move(action, value);
            break;
    }
});

console.log('N/S:', northSouth, ' E/W:', esatWest);
console.log('Sum: ', Math.abs(northSouth) + Math.abs(esatWest));

function move(dir, val) {
    switch(dir) {
        case 'E': 
            esatWest += val; 
            break;
        case 'W':
            esatWest += -val; 
            break;
        case 'S':
            northSouth += -val; 
            break;
        case 'N':
            northSouth += val; 
            break;
    }
}

function rotate(dir, val) {
    val = val/90;
    if (dir == 'L') {
        val = -val
    } 

    val -= compass.length * Math.floor(val / compass.length);
    compass.push.apply(compass, compass.splice(0, val));
}