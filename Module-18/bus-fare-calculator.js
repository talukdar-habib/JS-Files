/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 20;
const isStudents = true;
let discount;
let ticketFare = 800;

if(age < 10){
    console.log('Tickets are free');
}

else if(isStudents === true){
    ticketFare =  800 / 2;
    console.log(ticketFare);
}

else if(age >= 60){
    discount = 800 * (15/100);
    ticketFare = 800 - discount;
    console.log(ticketFare);
}
else{
    console.log('you need to pay full fare');
}