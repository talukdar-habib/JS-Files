
function sendNotification(email) {
    if (email.includes("@") === false) {
      return "Invalid Email";
    }
    const divided = email.split("@");
    const notification = divided[0] + " sent you an email from " + divided[1];
    return notification;
  }
  
  