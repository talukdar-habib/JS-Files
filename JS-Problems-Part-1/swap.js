
// Swap with temp
let c = 6;
let d = 8;
console.log(c,d);
const temp = c;// temp variable e c er man ta rakhsi
c = d; // c er moddhe d er man rakhsi
d = temp;// d er moddhe temp er man mane c er man 6 ta k rakhsi
console.log(c,d);// then swap kore print korsi... c er man hoise d and d er man hoise c


// swap without temp

let a = 10;
let b = 20;
console.log(a,b);
[a,b] = [b,a];// swap kore deya hoise temp chara
console.log(a,b);
