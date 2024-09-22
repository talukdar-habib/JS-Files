const person = {
    name : 'MR Habib',
    age : 25,
    profession : 'Web Developer',
    hobby : ['cricket', 'football', 'biking', 'walking'],
    unique : {
        favColor : 'Olive',
        favBike : 'Honda',
        favSpot : {
            bangladesh : 'cox',
            europe : 'italy',
            australia : 'sydney'
        }
    }
}

// console.log(person.age);  // person object er moddhe age property and tar value dekhar jonno 
// console.log(person.unique.favColor);  //person object er vitore fav color arekta object er property and value dekhar jonno

person.unique.favSpot.europe = 'Spain'; //evabe value update kora jay
console.log(person.unique.favSpot.europe); //same as previous

person.hobby[2] = 'swimming'; // evabe update korte hobe
console.log(person.hobby[2]); // object er property er vitor array er moddhe single element k ber korar jonno evabe index wise ber korte hbe

delete person.age;  // evabe kono property ba value delete korte hoy
console.log(person);