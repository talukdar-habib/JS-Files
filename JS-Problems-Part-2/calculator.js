// calculator make korar way

function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const sum = num1 - num2;
    return sum;
}

function multiply(num1,num2){
    const sum = num1 * num2;
    return sum;
}

function divide(num1,num2){
    const sum = num1 / num2;
    return sum;
}



function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed";
    }
}

const result = calculator(12,29, 'subtract');
console.log(result);