/**
 * Function takes an array as parameter...
 * Give me the average of the even numbers in the array...
 */

/**
 *  1. Put even numbers in an array
 */

function evenAverage(numbers){
    // console.log(numbers);
    const evens = []; // array te even number gula niye store kore rakhar jonno
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number); // evabe array te patano hoy
        }
    }
    // console.log(evens);
    let sum = 0;
    for(const number of evens){
        sum = sum + number;
    }
    const count = evens.length; // even er j array ase oitar length ber korar jonno
    // console.log(sum,count);
    const avg = sum / count;
    return avg;
}
const numbers = [13,25,86,67,21,36,23,58,];
const avg = evenAverage(numbers);
console.log('Average of the Even number is: ', avg);