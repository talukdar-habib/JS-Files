function checkDigitsInName(name){
    if (typeof name !== "string") {
      return "Invalid Input";
    }
    for (const character of name) {
      if (character >= "0" && character <= "9") {
        return true;
      }
    }
    return false;
  }
