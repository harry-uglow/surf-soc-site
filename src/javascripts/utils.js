export const shuffleArray = inputArray => {
  let array = inputArray.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const rotateArray = inputArray => {
  let array = inputArray.slice();
  array.push(array.shift());
  return array;
};

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const secondsToString = (seconds) => {
  const yearsRemainder = seconds % 31536000;
  const numdays = Math.floor(yearsRemainder / 86400);
  const daysRemainder = yearsRemainder % 86400;
  const numhours = String(Math.floor(daysRemainder / 3600)).padStart(2, '0');
  const hoursRemainder = daysRemainder % 3600;
  const numminutes = String(Math.floor(hoursRemainder / 60)).padStart(2, '0');
  const numseconds = String(Math.floor(hoursRemainder % 60)).padStart(2, '0');
  return numdays + " days, " + numhours + ":" + numminutes + ":" + numseconds + "";

};