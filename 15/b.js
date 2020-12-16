const START = [1,20,8,12,0,14];

let spoken = new Map();

let turn = 1;
START.forEach((n, i) => {
    if (i !== START.length-1) {
        spoken.set(n, turn);
    }
    turn++;
})
let lastSpoken = START[START.length-1];
while (turn <= 30000000) {
    let spokenBefore = spoken.get(lastSpoken);
    spoken.set(lastSpoken, turn-1);
    if (spokenBefore !== undefined) {
        lastSpoken = (turn-1)-spokenBefore;
    } else {
        lastSpoken = 0;
    }     
    turn++;
}

console.log('30000000th number spoken:', lastSpoken)