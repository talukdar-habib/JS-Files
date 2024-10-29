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



// exact string na diye jodi vul vabe like number diye deya hoy seta k warning ba thik korte bolar way

function fullName(first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be a string'
    }
    const full = first + ' '+ second
    return full;
}

const full = fullName('Habib',7);
console.log(full);