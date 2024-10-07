/**
 * Create function that will return only the even numbers
 * Return the sum of Even numbers
 */

function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            evens.push(number);

        }
    }
    return evens;
}
// const numbers = [11,25,36,45,80,95,102];
// const evens = evenNumbersOnly(numbers);
// console.log('Evens numbers are: ',evens);





function sumOfEvenNumbers(){
    let sum = 0;
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }  
    return sum;
}
const numbers = [20,40,45,65,66,14,20];
const sum = sumOfEvenNumbers(numbers);
console.log('Sum of Even numbers is: ',sum);
