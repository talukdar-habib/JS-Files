/**
 * **********SIMPLE LOGIC*************
 * Year will be a Leap Year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear = isLeapYear(2080);
// console.log(leapYear);


/**
 * 1. Those year that is not divisible by 100 and if the year is divisible by 4, then it will be a Leap Year...
 * 2. If the year is divisible by 400 then it will be a Leap Year...
 * 3. Else it is not a Leap Year...
 */

function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0 && year % 100 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear1 = isLeapYear(2024);
const leapYear2 = isLeapYear(2028);
const leapYear3 = isLeapYear(2100);
const leapYear4 = isLeapYear(2300);
const leapYear5 = isLeapYear(2400);

console.log(leapYear1,leapYear2,leapYear3,leapYear4,leapYear5);
