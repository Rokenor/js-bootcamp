function avg(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++ ) {
    total += array[i];
  }
  return total / array.length;
}

function avg(array) {
  let total = 0;
  for(let num of array) {
    total += num;
  }
  return total / array.length;
}