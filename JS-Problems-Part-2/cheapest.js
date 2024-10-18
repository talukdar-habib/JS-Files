// lowest price ta ber korar way object er maddhome (only price ta ke compare kore)

const mobiles = [
    {name: 'Samsung', price: 28000, camera: '20mp', color: 'black'},
    {name: 'Xiaomi', price: 15000, camera: '20mp', color: 'black'},
    {name: 'Huawei', price: 20000, camera: '20mp', color: 'black'},
    {name: 'Motorola', price: 17000, camera: '20mp', color: 'black'},
    {name: 'Iphone', price: 60000, camera: '20mp', color: 'black'},
    {name: 'Symphony', price: 12000, camera: '20mp', color: 'black'},
    {name: 'Walton', price: 9500, camera: '20mp', color: 'black'}

]

function getCheapestMobiles(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestMobiles(mobiles);
console.log('Cheapest mobile is: ', cheap);