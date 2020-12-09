const fs = require('fs');
var arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n');

let bagMap = new Map();
console.log();
arr.forEach(str => {
    str = str.replace(' contain' , '').replace('.', '').replace(',', '').replace(/ /g,'');
    let bag = str.split(/bags|bag/g);
    let containedBags =  [];
    for (let i = 1; i < bag.length; i++) {
        let obj = bag[i].split(/(\d+)/gi);
       if (obj.length > 1) {
           containedBags.push({color: obj[2], qty: obj[1]});
        }
    }
    bagMap.set(bag[0], containedBags)
});

function getByValue(searchValue) {
    let matches = [];
    for (let [key, value] of bagMap.entries()) {
        value.map(v => {
            if (v.color == searchValue) {
                matches.push(key);
            }
        })
    }
    return matches;
  }


let topLvlBags = getByValue('shinygold');

let test = topLvlBags;

function it(list) {
    if (list.length !== 0) {
        list.forEach(bag => {
            test.push(...getByValue(bagMap, bag));
            it(x);
        })
    }
}


it(topLvlBags);

var allBagsSet = new Set(test);

console.log('test', allBagsSet)
console.log('test', allBagsSet.size)