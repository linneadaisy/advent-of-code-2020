const fs = require('fs');
const arr = fs.readFileSync('input.txt').toString().split('\n\n');

/*
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
*/

const rules = [
    new RegExp('byr:(19[2-9][0-9]|200[0-2])\\b'),
    new RegExp('iyr:(201[0-9]|2020)\\b'),
    new RegExp('eyr:(202[0-9]|2030)\\b'),
    new RegExp('hgt:((1[5-8][0-9]|19[0-3])cm)|((59|6[0-9]|7[0-6])in)\\b'),
    new RegExp('hcl:#([0-9]|[a-f]){6}\\b'),
    new RegExp('ecl:(amb|blu|brn|gry|grn|hzl|oth)\\b'),
    new RegExp('pid:(\\d{9})\\b'),
 ]

let valid = 0;
let invalid = 0;

arr.forEach((pass, i) => {
    rules.every(r => r.test(pass)) ? valid++ : invalid++;
})

console.log("Total passports:", arr.length);
console.log("Valid passports:", valid, "and invalid:", invalid);