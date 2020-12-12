const fs = require("fs");
const arr = fs.readFileSync("input.txt").toString().trimEnd().split("\n");

let boat = [];
arr.forEach((a) => {
  boat.push([...a]);
});

const xLimit = boat.length - 1;
const yLimit = boat[0].length - 1;

while (!chnageSeat());

function chnageSeat() {
  // To lose reference
  let tempBoat = boat.map((b) => {
    return b.slice();
  });

  for (let i = 0; i < tempBoat.length; i++) {
    let row = tempBoat[i];
    for (let j = 0; j < row.length; j++) {
        let newSeatState = '.';
        if (boat[i][j] !== '.') {
            newSeatState = checkRules(boat[i][j], getNumOfTakendAdjacentSeats(i, j))
        }
      tempBoat[i][j] = newSeatState;
    }
  }
  // printState(boat);
  // Makes strings to compare arrays
  if (boat.toString() === tempBoat.toString()) {
    console.log("Number of empty seats: ", boat.toString().match(/#/g).length);
    return true;
  } else {
    boat = tempBoat;
    return false;
  }
}

function checkRules(seat, taken) {
  if (seat == "L") {
    return taken == 0 ? "#" : "L";
  }
  return taken > 4 ? "L" : "#";
}

function getNumOfTakendAdjacentSeats(posX, posY) {
  let taken = 0;
  for (let x = Math.max(0, posX - 1); x <= Math.min(posX + 1, xLimit); x++) {
    for (let y = Math.max(0, posY - 1); y <= Math.min(posY + 1, yLimit); y++) {
      if (x !== posX || y !== posY) {
        let v = boat[x][y];
        let range = 1;
        while (v == ".") {
          let newX = extendRange(x, posX, range);
          let newY = extendRange(y, posY, range);
          if (
            (newX > xLimit && newY > yLimit) ||
            newX < 0 ||
            newY < 0 ||
            newX > xLimit ||
            newY > yLimit
          ) {
            v = "BOOM";
          } else {
            v = boat[newX][newY];
          }
          range++;
        }
        taken += v == "#" ? 1 : 0;
      }
    }
  }
  return taken;
}

function extendRange(n, startPoint, range) {
  let newVal = n;
  if (n > startPoint) {
    newVal += range;
  } else if (n < startPoint) {
    newVal += -range;
  }
  return newVal;
}

//Thx gazze
function printState(state) {
  for (let row of state) {
    for (let char of row) {
      process.stdout.write(char);
    }
    process.stdout.write("\n");
  }
}
