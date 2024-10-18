// expensive price ta ber korar way object er maddhome (only price ta ke compare kore)

const mobiles = [
    {brand: 'Samsung', color: 'black', camera: '30mp', price: 40000},
    {brand: 'Redmi', color: 'black', camera: '30mp', price: 30000},
    {brand: 'Iphone', color: 'black', camera: '30mp', price: 85000},
    {brand: 'symphony', color: 'black', camera: '30mp', price: 45000},
    {brand: 'walton', color: 'black', camera: '30mp', price: 35000},
]

function getExpensiveMobiles(phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}
const expensive = getExpensiveMobiles(mobiles);
console.log('Expensive one is: ', expensive);