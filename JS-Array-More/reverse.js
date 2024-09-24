
            //  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// reversed = numbers.reverse(); // another way using variable
// console.log(reversed);



// const revNumbers = [];
// for (const num of numbers){
//     // console.log(num);
//     revNumbers.unshift(num);
// }
// console.log(revNumbers);


// const rev = [];
// for (let i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     rev.unshift(num);
// }
// console.log(rev);


// reverse  side

// const revRev = [];
// for(let i = numbers.length -1; i >= 0;  i--){
//     const num = numbers[i];
//     console.log(num);
//     revRev.push(num);
// }
// console.log(revRev);


const char = ['a', 'b', 'c', 'd', 'e', 'f'];
const letter = [];

for(const pep of char){
    console.log(pep);
    letter.unshift(pep);
}
console.log(letter);
