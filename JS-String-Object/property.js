const person = {
    name : 'Habib',
    age : 25,
    profession : 'Web Developer',
    salary : 30000,
    married : true,
    'fav places' : ['bandarban', 'sundarban', 'jaflong'],
}
// console.log(person);
// dot notation --> dot simble diye object er value access kora jay
console.log(person.profession); // eivabe object er  single property dekha jabe

const income = person.salary;
console.log(income);
// const income = person.salary;
// console.log(income); evabe alada variable e niyeo dekha jabe


// bracket notation
// third bracket diye object er value access kora jay onekta ta array er moto kore
console.log(person['name']);
const givenName = person['name'];
console.log(givenName);

// error
// console.log(person.fav places);
console.log(person['fav places']);


