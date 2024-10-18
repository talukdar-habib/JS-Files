/**
 * shirt price --> 700
 * pant price --> 800
 * shoe price --> 1200
 */

function clothQuantity(shirtQuantity,pantQuantity,shoeQuantity){
    const perShirtPrice = 700;
    const perPantPrice = 800;
    const perPairShoePrice = 1200;

    const totalShirtPrice = shirtQuantity * perShirtPrice;
    const totalPantPrice = pantQuantity * perPantPrice;
    const totalPairShoesPrice = shoeQuantity * perPairShoePrice;

    const totalShoppingPrice = totalShirtPrice + totalPantPrice + totalPairShoesPrice;

    return totalShoppingPrice;
}

const shopping = clothQuantity(2,1,1);
console.log('Total shopping price: ', shopping);