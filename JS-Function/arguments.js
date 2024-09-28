function double(number){
    const doubled = number * 2;
    console.log(number,'The doubled is: ', doubled);
}
console.log('I will call the function');
double(500);
console.log('..................');
double(125);
console.log('............................');

// number diye j parameter create korsi oita variable hishebeo use hoy, jehetu eta function er vitore ache so same nam diye variable baireo create korte parbo

const number = 200;
double(number);
const number1 = 300;
double(number1);
const number2 = 400;
double(number2);
const number3 = 500;
double(number3);

console.log('....................................................');
console.log('.....................................................');
console.log('.....................................................');
console.log('.....................................................');

function difference(num1,num2){
    const diff = num1 - num2;
    console.log(num1,num2, 'The difference is: ',diff);
}

// difference(100,20);
// difference(200,40);

const fatherAge = 60;
const myAge = 26;
difference(fatherAge,myAge);

