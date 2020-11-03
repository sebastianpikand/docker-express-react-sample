for (let intArray = [], i = 0; i < 40; ++i) intArray[i] = i;

// http://stackoverflow.com/questions/962802#962890
const shuffle = (array) => {
  let tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
};

intArray = shuffle(intArray);

module.exports = intArray;
