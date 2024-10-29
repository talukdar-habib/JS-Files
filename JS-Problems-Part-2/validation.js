// exact number na diye jodi vul vabe like string diye deya hoy seta k warning ba thik korte bolar way

function multiply(num1,num2){
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     return 'Please provide a number';
    // }
    if(typeof num1 !== 'number'){
        return 'Please provide a number';
    }
    else if(typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const sum = num1 * num2;
    return sum;
}

const result = multiply(7, '20');
// console.log(result);



// exact string na diye jodi vul vabe like number diye deya hoy seta k warning ba thik korte bolar way

function fullName(first, second){
    // if(typeof first !== 'string' || typeof second !== 'string' ){
    //     return 'First and Second name should be string';
    // }
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
// console.log(full);




// Object thik vabe check korar way jate vul kichu input dile dhore fela jay

function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}
const price = getPrice({name: 'Mobile', color: 'blue', price: 15000}); //right one
// const price = getPrice(5); // wrong one
// console.log(price);





// Array thik vabe check korar way jate vul kichu input dile dhore fela jay


function getThird(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array';
    }
    const third = numbers[4];
    return third;
}

const third = getThird([10,50,30,54,65,455,4]); // wright one 
// const third = getThird(10); // wrong one
console.log(third);