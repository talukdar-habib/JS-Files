function checkDigitsInName(name) {
  
    if (typeof name !== "string") {
      return "Invalid Input";
    }
  
    const digits = "0123456789";
  
    
    for (const character of name) {
      if (digits.includes(character)) {
        return true;
      }
    }
  
    return false;
  }
