function calculateTax(income, expenses) {
    if (
      expenses > income ||
      expenses < 0 ||
      income < 0
    ) {
      return "Invalid Input";
    }
    const tax = (income - expenses) * .20;
    return tax;
  }
