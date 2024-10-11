// evabe shudhu inch theke feet ber kora jay doshomik/decimal number shoho
// example: 6.25, 5.35 etc.

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const inch = 85;
const myHeight = inchToFeet(inch);
// console.log(myHeight);


// evabe ekdm feet inch eksathe kore ber kora jay
// example: 5 feet 5 inch, 6 feet 8 inch etc.
function inchToFeet2(inch){
    const feetFraction = inch % 12;
    const feetNumber = parseInt(feetFraction); // parseInt diye decimal chara
    const inchRemaining = inch % 12; // baki inch  ta k alada kore add korar jonno
    const result = feetNumber + ' feet ' + inchRemaining + ' inch.';
    return result;
}
const myHeight2 = inchToFeet2(65);
// console.log(myHeight2);




// Mile to Kilometer

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const result = mileToKilometer(25);
// console.log('Mile to Kilometer is: ',result);


// Kilometer to Mile

function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    const decimal = parseFloat(mile.toFixed(2)); // doshomik er por 2ta shongkha anar jonno
    return decimal;
}
const result1 = kiloToMile(50);
console.log('Kilometer to Mile is: ', result1);
