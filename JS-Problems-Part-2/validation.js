// exact number na diye jodi vul vabe like string diye deya hoy seta k warning ba thik korte bolar way

function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const sum = num1 * num2;
    return sum;
}

const result = multiply(7, '20');
// console.log(result);



