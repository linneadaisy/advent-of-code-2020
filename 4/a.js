const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n\n');

/*
byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)
*/

const req = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

let valid = 0;
let invalid = 0;

arr.forEach(pass => {
    req.every(r => pass.includes(r)) ? valid++ : invalid++;
})

console.log("Total passports:", arr.length);
console.log("Valid passports:", valid, "and invalid:", invalid);