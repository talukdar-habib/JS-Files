function waitingTime(waitingTimes, serialNumber) {
  
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    sum += waitingTimes[i];
  }

  
  const averageWaiting = Math.round(sum / waitingTimes.length);

  
  const waitingPosition = serialNumber - 1;
  const totalWaitingTime = averageWaiting * (waitingPosition - waitingTimes.length);

  return totalWaitingTime;
}
  