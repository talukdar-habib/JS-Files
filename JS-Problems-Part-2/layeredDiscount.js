/**
 * purchase upto 100: price will be 100
 * purchase more than 101 to 200: price will be 90
 * purchase more than 200: price will be 70 
 */

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        console.log('There is no discount for 0 to 100 pieces purchase. Price is full (100)')
        return total;
    }
    else if(quantity <= 200){
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        console.log('There is 10% discount after purchase range between 101 to 200 pieces. Price is 90')
        return total;
    }
    else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 90;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        console.log('There is 30% discount after 200 piece purchased. Price is 70')
        return total;
    }
}

const total = layeredDiscountedTotal(110);
console.log(total);






//  first 50 piece price is : 150
// 51 to 70 piece price is : 130
//  more than 70 piece price is: 100

function getLayereddis(quantity){
    const first50Price = 150;
    const second20Price = 130;
    const above70Price= 100;

    if(quantity <= 50){
        const total = quantity * first50Price;
        console.log('There is no discount for 0 to 50 pieces purchase. Price is full (150)')
        return total;
    }
    else if(quantity <= 70){
        const first50Total = first50Price * 50;
        const remainingQuantity = quantity - 50;
        const remainingTotal = remainingQuantity * second20Price;
        const total = first50Total + remainingTotal;
        console.log('There is 10% discount after purchase range between 51 to 70 pieces. Price is 130')
        return total;
    }
    else{
        const first50Total = first50Price * 50;
        const second20Total = second20Price * 20;
        const remainingQuantity = quantity - 70;
        const remainingTotal = remainingQuantity * above70Price;
        const total = first50Total + second20Total + remainingTotal;
        console.log('There is 30% discount after 70 piece purchased. Price is 100')
        return total;
    }
}

const sum = getLayereddis(60);
console.log(sum);









