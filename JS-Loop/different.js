// ****************odd********************

// for (i=0; i<20; i++){
//     if( i % 2 === 1 ){
//         console.log(i);
//     }
    
// }


// for (i=0; i<20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }


//********************even*************** */

// for (i = 0; i < 20; i++){
//     if(i % 2 ===0){
//         console.log(i);
//     } 
// }


// for (i = 0; i < 20; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }




//  Divisible by 5

// for (i = 1; i <= 50; i++){
//     if(
//         i % 5 === 0
//     ){
//         console.log(i);
//     }
// }

// Divisible by 6

// for (i = 1; i <= 100; i++){
//     if(i % 6 === 0){
//         console.log(i);
//     }
// }


// divisible by 5 or 6 ( divisible by 5 or 6 anyone if I use ||)

// for (i = 1; i <= 100; i++){
//     if(i % 5 === 0 || i % 6 ===0){
//         console.log(i);
//     }
// }


// divisible by 5 and 6 ( divisible by 5 and 6 mandatory if I use &&)

// for (i = 1; i <= 100; i++){
//     if(i % 5 === 0 && i % 6 ===0){
//         console.log(i);
//     }
// }


// divisible by 5 and sum

let sum = 0;

for(i=1; i<=50; i++){
    if(i % 5 === 0){
        console.log(i);
        sum = sum + i;
        console.log('Sum---------', sum);
    }
}
console.log('Sum is: ', sum);
