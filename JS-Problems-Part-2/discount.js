// All item discount 

/**
 * purchase upto 100: price will be 100
 * purchase more than 101 to 200: price will be 90
 * purchase more than 200: price will be 70 
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        console.log('There is no discount. Price is 100')
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        console.log('There is 10% discount. Price is 90')
        return total;
    }
    else{
        const total = quantity * 70;
        console.log('There is 30% discount. Price is 70')
        return total;
    }
}

const total = discountPrice(205);
console.log(total);