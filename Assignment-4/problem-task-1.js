

// // Problem-01 : Tax Calculator

// function calculateTax(income,expense){

//     if(income < 0 || expense < 0){
//         return 'Invalid Input';
//     }
//     else if(expense > income){
//         return 'Invalid Input';
//     }
//     const tax = income - expense * 0.2;
//     return tax
// }

// const result = calculateTax(1000,700);
// console.log(result);


// function calculateTax(income, expenses) {
//     if (typeof income !== "number" || typeof expenses !== "number") {
//       return "Invalid Input";
//     }
  
//     if (income < 0 || expenses < 0) {
//       return "Invalid Input";
//     }
//     if (expenses > income) {
//       return "Invalid Input";
//     }
  
//     const tax = (income - expenses)* 0.2;
  
//     return tax;
//   }

//   const result = calculateTax('Habib', 1000);
// console.log(result);








// const income = 1000;
//     const expense = 700;
//     const remaining = income - expense;
//     console.log(remaining);


// Final one


function calculateTax(income,expenses){
    if(typeof income !== 'number' || typeof expenses !== 'number'){
        return 'Invalid Input';
    }
    
    if(income < 0 || expenses < 0){
        return 'Invalid Input';
    }
    else if(expenses > income){
        return 'Invalid Input';
    }
    const tax = (income - expenses) * (20/100);
    return tax;
}
const result = calculateTax(6000,-1500);
console.log(result); //optional part


