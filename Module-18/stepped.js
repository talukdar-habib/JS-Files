const price = 10000;

if(price >= 30000){
    // Discount
const discount = price * 10 / 100;
const payAmount = price - discount;
console.log(payAmount);
}
else{
    console.log(price)
}
