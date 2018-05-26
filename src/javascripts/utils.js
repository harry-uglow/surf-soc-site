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
