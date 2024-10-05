// ei code diye ami string er size and oi string er size ta jor nki bijor shonkha oitao ber korte parbo
function evenSizedString(str){
    const lengthSize = str.length; // length ba size ber korar jonno
    console.log(str,lengthSize); // str parameter r size ta k print korar jonno
    if(lengthSize % 2 === 0){
        console.log('String size is even')
        return true;
    }
    else{
        console.log('String size is odd')
        return false;
    }
}
// evenSizedString('Dhaka');
// evenSizedString('Chattogram');


function doubleOrTriple(number,double){  // number variable e number gula thakbe r double e thakbe double nki triple korbe eshb thkabe
    if(double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(20,true));  // ekhane 20 ta number ta use hoise r true ta double korar jonno use hoise condition onujayi
console.log(doubleOrTriple(20,false));  // ekhane 20 ta number ta use hoise r false ta fourple korar jonno use hoise condition onujayi


function numOfElements(numbers){
    const len = numbers.length;
    return len;
}
console.log('Array length is: ', numOfElements([10,20,30,54,356,55]));


// object use kore function 
function getAge(person){
    const age = person.age;
    // const name = person.name
    // return name;
    return age;
}
const person = {
    // name : 'Habib',
    age : 26,
};
const name = getAge(person);
console.log('Age is :', name);





function personName(person2){
    const name = person2.name;
    return name;
}
const person2 = {
    name : 'Habib',
};
const name2 = personName(person2);
console.log('Name is :', name2);
