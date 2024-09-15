// Simple ternary

// const age = 20;
// age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako'); 


let price = 500;
const isLeader = false;
if (isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;