const person = {
    name : 'Habib',
    age : 25,
    profession : 'Web Developer',
    salary : 30000,
    married : true,
    'fav places' : ['bandarban', 'sundarban', 'jaflong'],
}

// update with dot and bracket notation
person.salary = 40000;
person.age = 30;
person ['age'] = 40;
person['fav places'] = ['maldives', 'bali', 'pataya'];

console.log(person);

const propName = 'name';
person[propName] = 'Talukdar';
console.log(person);
