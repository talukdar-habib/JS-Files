function waitingTime(waitingTimes, serialNumber) {
    if (
      Array.isArray(waitingTimes) === false ||
      typeof serialNumber !== "number"
    ) {
      return "Invalid Input";
    }
  
    let sum = 0;
    let avg = 0;
    let totalWaiting = 0;
    for (const time of waitingTimes) {
      sum = sum + time;
      avg = Math.round(sum / waitingTimes.length);
      totalWaiting = avg * (serialNumber - 1 - waitingTimes.length);
    }
    return totalWaiting;
  }
  