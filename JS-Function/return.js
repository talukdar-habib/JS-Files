function tenTimes(number){
    const result = number * 10;
    return result;
    // console.log(result);
}
function cutHalf(number){
    const half = number / 2;
    return half;
}

tenTimes(5);

const output = tenTimes(10);  //j result ta ashe function call korle oita return hishebe ashe and oi value/result/return ta output nam er variable e rakha holo evabe
console.log('Output is: ',output);

const output1 = cutHalf(100);
console.log('Output 1 is: ',output1);