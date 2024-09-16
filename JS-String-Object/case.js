const school = 'Chittagong Police Institution';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// uppercase = ABCDEFGH
// lowercase = abcdefgh

const subject = 'Physics';
const book = 'physics';

if(subject === book){
    console.log('Exam e chokka');
}
else{
    console.log('dabba');
}

//trim() =  eta diye age picher shob space remove kora hoy


const fruit = 'mango  ';
const fol = ' mango  ';
if(fruit.trim() === fol.trim()){
console.log('Fol er upore oshud nai');
}      
else{
    console.log('fol hoilo fol');
}