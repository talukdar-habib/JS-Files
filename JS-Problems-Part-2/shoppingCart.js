//  products er price and quantity er sum gula eksathe sum korar way

const products = [
    { name: 'shampoo', price: 300, quantity: 1},
    { name: 'panjabi', price: 2500, quantity: 3},
    { name: 'underwear', price: 300, quantity: 2},
    { name: 'pen', price: 10, quantity: 10},
]

function getShoppingTotal(products){
    let sum = 0;

    for(const product of products){
        const individualProductCost = product.price * product.quantity;
        sum = sum + individualProductCost;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log('Total shopping is: ', total);