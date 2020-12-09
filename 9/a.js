const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().trimEnd().split("\n");

let preambleSize = 25;

    for (let i = 0; i < array.length; i++) {        
        let preamble = array.slice(i, preambleSize + i);
        let sum = array[preambleSize + i];

        if (!findSum(preamble, sum)) {
            console.log("Found sum: ", sum);
            process.exit(0);
        }
    }

function findSum(arr, sum) {
  arr = arr.sort((a, b) => a - b);

  let l = 0;
  let r = arr.length -1;
  
  while (l < r) {
    let al = Number.parseInt(arr[l]);
    let ar = Number.parseInt(arr[r]);

    if (al + ar == sum) {
        return true;
    } else if (al + ar < sum)  {
        l++;
    } else {
        r--;
    }
  }

  return false;
}
