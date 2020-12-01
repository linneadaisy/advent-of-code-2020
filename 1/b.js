const fs = require('fs');
var arr = fs.readFileSync('input.txt').toString().split('\n').map(line => Number.parseInt(line));

arr.find((n) => first(n));

function first(p) {
  arr.find((n) =>  n+p < 2020 ? second(n, p) : false);
}

function second(x, y) {
  arr.find((n) => {
    if (n + x + y == 2020) {
      console.log("HIT", n, x, y);
      console.log("SUM", n * x * y);
      process.exit(0);
    } 
  });
}

