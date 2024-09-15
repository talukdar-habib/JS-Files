function calculateTax(income, expenses) {
    if (typeof income !== "number" || typeof expenses !== "number") {
      return "Invalid Input";
    }
  
    if (income < 0 || expenses < 0) {
      return "Invalid Input";
    }
    if (expenses > income) {
      return "Invalid Input";
    }
  
    const tax = (income - expenses)* 0.2;
  
    return tax;
  }
