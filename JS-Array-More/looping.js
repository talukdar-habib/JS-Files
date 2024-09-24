/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

const friends = ['elon', 'bill', 'mark', 'warren'];

for (const friend of friends ){
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);  //index gula print korar jonno
    // console.log(friends[i]); // index+value eksathe print korar jonno
}


const numbers  = [10,20,52,455,2,56,45,2,66,44]
for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    // console.log(numbers[i]);
}


let i = 0;
while (i < friends.length){
    console.log(friends[i]);
    i++;
}

let n = 0;
while ( n < numbers.length){
    console.log(numbers[n]);
    n++;
}


