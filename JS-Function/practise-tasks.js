/**
 * Task-1
 * Take four parameters. Multiply the four numbers and then return the result
 */

function multiplyFourNumbers(a,b,c,d){
    const result = a*b*c*d;
    console.log(result);
    return result;
}
// const numbers = [10,20,30,40];
const result = multiplyFourNumbers(5,5,5,5);
console.log('Multiplication of this numbers is: ',result);



/**
 * Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddEvenCheck(number){
    if(number % 2 === 1){
        const result = number * 2;
        console.log('Odd result: ',result);
        return result;
    }
    else{
        number % 2 === 0;
        const result = number / 2;
        console.log('Even Result: ',result);
        return result;
    }
}

const sum = oddEvenCheck(100);
console.log('The Result is: ',sum);



/**
 * Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr,size){
    let sum = 0;
    
    for(const num of arr){
        sum = sum + num;
    }
    let average = sum / size;
    return average;

}
const numbers = [25,33,96,21,57];
const size = numbers.length;
const average = make_avg(numbers,size);
console.log('The average is: ',average);



/**
 * Task-4
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(binaryString){
    let zeroCount = 0;
    for(const char of binaryString){
        if(char === '0'){
            zeroCount++;
        }
    }
    return zeroCount;
}
const binaryString = '1001100111000000000000';
const result1 = count_zero(binaryString);
console.log("The number of 0's is: ",result1);



/**
 * Task-5
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

// function odd_even(number){
//     if(number % 2 === 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// const number = 13;
// const result2 = odd_even(number);
// console.log(result2);

/**
 * ****************Another way***************
 */

function odd_even(number){
    let result;
    if(number % 2 === 0){
        result = "Number is Even";
    }
    else{
        result = "Number is Odd";
    }
    return result;
}
const number = 23;
const answer = odd_even(number);
console.log('Here the odd even number result: ',answer);
