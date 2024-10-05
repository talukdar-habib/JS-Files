function add(price1,price2){
    const total = price1 + price2; // total er moddhe ami summation ta rakhsi
    return total; // then ekhane total ta k return korsi
}
const bill = add(100,800); // bill er moddhe add function er argument/equation ta k rakha hoise
console.log(bill);

function add2(price1, price2){
    return price1 + price2; // ekhane kono variable e na rekhe direct summation k return kore deya hoise
}
const bill2 = add2(200,300);
console.log(bill2);


function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num2 - num1;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
const solution = doMath(20,25);
console.log(solution);