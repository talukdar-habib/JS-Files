const mobile = {
    brand : 'redmi',
    ram : '8gb',
    storage : '256gb',
    color : 'blue',
    price : 20000,
    isNew : true,
}

// for of : array te use kora hoy
// for in : object e use kora hoy
// for (const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
    console.log(key, ':', mobile[key]); // value shoho dekhar jonno evabe
}