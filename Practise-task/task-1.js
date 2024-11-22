// Task-1
//You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

var money = 100; //Money I have
var onekgApple = 30; //One kg Apple Price
var onekgOrange = 25; //One kg Orange Price
var totalCost = onekgApple+onekgOrange; //Apple+Orange which is my cost
var moneyReturn = money - totalCost; //This is my return money which is paid by shopkeeper to me
console.log(totalCost);
console.log(moneyReturn); //This is the result