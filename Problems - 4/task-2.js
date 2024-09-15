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
