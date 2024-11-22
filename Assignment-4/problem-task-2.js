// Problem 02 : Notification Generator

// function sendNotification(email){
//     if(email.indexOf('@')=== -1){
//         return 'Invalid Email'
//     }
//     const splited = email.splited
// }
// const value = sendNotification('');
// console.log(value);


function sendNotification(email) {

    if (email.indexOf("@") === -1) {
    return "Invalid Email";
    }
    const splited = email.split("@");
    const firstName = splited [0];
    const lastName = splited [1];

    const noti = firstName + " sent you an email from " + lastName; 
    return noti;
}

const noti = sendNotification('zihad@gmail.com');
console.log(noti);

const noti2 = sendNotification('farhan34@yahoo.com');
console.log(noti2);
const noti3 = sendNotification('nadim.naem5@outlook.com');
console.log(noti3);
const noti4 = sendNotification('fahim234.hotmail.com');
console.log(noti4);
const noti5 = sendNotification('sadia8icloud.com');
console.log(noti5);


