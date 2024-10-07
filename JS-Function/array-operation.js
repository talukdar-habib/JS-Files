/**
 * Objective: Write a function to give me the sum of all numbers in an array 
 * 
 * Step-1: Declare a Function
 * Step-2: Call check whether the function is called properly
 * Step-3: Set a parameter(s)
 * Step-4: Pass the parameter(s), check whether parameter is passed in a proper format
 * Step-5: Do the Function tasks (step by step)
 */

// function sumOfNumbers(){
//     return
// }

// const sum = sumOfNumbers();
// console.log('Sum of number is: ',sum);
// erokom jodi function er parameter and return na deya thake tahole output undefined dekhabe...shudhu return likhleo undefined ashbe jotokkhn na kono value deya hobe...

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [10,20,30,40];
const sum = sumOfNumbers(numbs);
console.log('Sum of number is: ',sum);




function friendsAgeSum (ages){
    let summation = 0;
    for(const age of ages){
        console.log(age);
        summation = summation + age;
        // console.log(age);

    }
    return summation;
}
const add = [50,60,55,68,3,22]
const summation = friendsAgeSum(add);
console.log('Age Summation is: ',summation);