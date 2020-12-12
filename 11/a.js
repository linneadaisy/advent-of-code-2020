const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let boat = []
arr.forEach(a => {
    boat.push([...a]);
});

const xLimit = boat.length-1;
const yLimit = boat[0].length-1;

while (!chnageSeat());

function chnageSeat() {
    // To lose reference
    let tempBoat = boat.map(b => { return b.slice(); });

    for(let i = 0; i < tempBoat.length; i++) {
        let row = tempBoat[i];
        for(let j = 0; j < row.length; j++) {
            let adj = finAdjacentSeats(i, j);
            tempBoat[i][j] = checkRules(tempBoat[i][j], adj);
        }
    }
    // Makes strings to compare arrays
    if (boat.toString() === tempBoat.toString()) {
        console.log('Number of empty seats: ', boat.toString().match(/#/g).length);
        return true;
    } else {
        boat = tempBoat;
        return false;
    }
}

function checkRules(cell, adj) {
    if (cell == 'L') {
        return adj.get('#') == undefined ? '#' : 'L';
    } else if (cell == '#') {
        return adj.get('#') > 3 ? 'L' : '#'; 
    }
    return '.';
}

function finAdjacentSeats(posX, posY) {
  let map = new Map();
    for(let x = Math.max(0, posX-1); x <= Math.min(posX+1, xLimit); x++) {
      for(let y = Math.max(0, posY-1); y <= Math.min(posY+1, yLimit); y++) {
        if(x !== posX || y !== posY) {
           let v = boat[x][y];
           map.get(v) ? map.set(v, (map.get(v))+1) : map.set(v, 1);
        }
      }
    }
    return map;
}

//Thx gazze
function printState(state) {
    for(let row of state) {
        for(let char of row) {
            process.stdout.write(char);
        }
        process.stdout.write('\n');
    }
}