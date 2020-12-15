const START = [1,20,8,12,0,14];

let spoken = START;

for (let i = START.length -1; i < 2019; i++) {
    let newNumSpoken = false;
    for (var j = spoken.length -2 ; j >= 0; j--) {
        if (spoken[i] == spoken[j]) {
            newNumSpoken = true;
            spoken.push(i-j);
            break; 
        } 
    } 
    
    if (!newNumSpoken){
        spoken.push(0)
    } 
}

console.log('2020th number spoken:', spoken[2019])