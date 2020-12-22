const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n\n');

let palyer1 = arr[0].split('\n').slice(1).map(l => Number.parseInt(l));
let palyer2 = arr[1].split('\n').slice(1).map(l => Number.parseInt(l));

let rounds = 0;
while (!gameOver()) {
    let card1 = palyer1.shift();
    let card2 = palyer2.shift();
    if (card1 > card2) {
        palyer1.push(card1, card2);
    } else {
        palyer2.push(card2, card1);
    } 
    rounds++;
}

function gameOver() {
    if (palyer1.length == 0) {
        calc(palyer2);
        return true;
    }
    else if (palyer2.length == 0) {
        calc(palyer1);
        return turn;
    }
    return false;
} 

function calc(arr) {
    let score = 0;
    let m = 1;
    for (let i = arr.length - 1; i >=0 ; i--) {
       score += arr[i] * m;
       m++;
    }

    console.log('Score: ', score)
}

