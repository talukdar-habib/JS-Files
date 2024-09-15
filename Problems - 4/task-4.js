function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null) {
      return "Invalid Input";
    }
  
    if (typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean") {
      return "Invalid Input";
    }
  
    let totalMark = obj.testScore + obj.schoolGrade;
  
    if (obj.isFFamily === true) {
      totalMark += 20;
    }
  
    if(totalMark >= 80){
    return true;
  }
  else{return false};
}
