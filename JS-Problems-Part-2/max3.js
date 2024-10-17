// 3 ta shonkhar moddhe max ber kora

const habib = 983;
const shagor = 1065;
const mashrafy = 78;

if(habib > shagor && habib > mashrafy){
    console.log('Habib is the Boss');
}
else if(shagor > habib && shagor > mashrafy){
    console.log('Shagor is the Boss');
}
else{
    console.log('Mashrafy is the Boss');
}


// Inside a function

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}

const max1 = maxOfThree(100,70,80);
const max2 = maxOfThree(45,65,78);
const max3 = maxOfThree(67,98,32);
const ultimateMax = maxOfThree(max1,max2,max3)
console.log('Max is: ', ultimateMax);

const max = Math.max(10,58,67,95,35,7545,5578,66665,54);  // unlimited number er moddhe max ber korar rules eta
console.log('Using Math.max is: ', max);