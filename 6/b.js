const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().trimEnd().split('\n\n');

let sum = 0;
arr.forEach(group => {
    let groupSum = 0;
    person = group.split('\n');
    person.sort((a, b) =>{return a.length - b.length});
    
    if (person.length == 1) {
        groupSum += person[0].length;
    } else {
        [...person[0]].forEach(c => {
            let temp = 0;
            for (let i = 0; i < person.length; i++) {
                temp += person[i].indexOf(c) == -1 ? 0 : 1;
                if(temp == person.length) {
                    groupSum +=1;
                }
            }    
        })
    }
    sum += groupSum;
})

console.log('Total YES:', sum);