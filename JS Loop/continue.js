// continue --> skip rest of the code for this iteration
// break --> I am done with this loop. loop end.

// for (i = 0; i < 20; i++){
//     if (i % 2 ===1){
//         continue;
//     }
//     console.log(i);
// }



let n = 0;

while (n < 20){
    n++;
    if(n % 5 === 0){
        continue;
    }
    console.log(n);
}