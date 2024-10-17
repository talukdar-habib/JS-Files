// 2ta shonkhar moddhe max number ber kora

const habib = 85;
const shagor = 99;

if(habib > shagor){
    console.log('Habib will get Strawberry');
}
else{
    console.log('Shagor will get Strawberry');
}


// Inside a function

function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(100,125);
const max2 = getMax(45,400);
const ultimateMax = getMax(max1,max2); // max1 e ekta max ashbe then max2 theke ekta max ashbe then 2ta max er max number ultimateMax e rakha hoise then ei 2tar moddhe abr jeta max ase oita kei print kora hoise evabe
console.log('Max is: ', ultimateMax);