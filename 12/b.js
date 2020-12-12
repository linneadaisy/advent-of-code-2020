const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let regExp = new RegExp('(\\w)(\\d+)');

let waypoint = [1,10]

let position = [0,0];

arr.forEach(a => {
    let [disc, action, value] = a.match(regExp);
    value = Number.parseInt(value);

    switch(action) {
        case 'F':
            position[0] += waypoint[0] * value;
            position[1] += waypoint[1] * value;
            break;
        case 'N': waypoint[0] += value; break;
        case 'E': waypoint[1] += value; break;
        case 'S': waypoint[0] += -value; break;
        case 'W': waypoint[1] += -value; break;
        case 'R':
        case 'L':
            rotate(action, value);
            break;
    }    
});

console.log('N/S:', position[0], ' E/W:', position[1]);
console.log('Sum: ', Math.abs(position[0]) + Math.abs(position[1]));

function rotate(dir, val) {
    let times = val/90;
    let n = dir == 'R' ? -1 : 1;

    for (let i = 0; i < times; i++) {
        waypoint = [waypoint[1] * n, waypoint[0] * -n];
    }
}
