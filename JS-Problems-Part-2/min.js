// lowest price ta ber korar way array theke

const prices = [25000,15000,18000,11000,100000,12000,25000]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log('Minimum is: ', cheap);