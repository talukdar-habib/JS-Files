// products er price gula eksathe sum korar way

const products = [
    {name: 'shampoo', price: 300},
    {name: 'panjabi', price: 2500},
    {name: 'underwear', price: 300},
    {name: 'pen', price: 10},
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log('Total shopping: ', total);