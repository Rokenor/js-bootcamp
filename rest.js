// old way

function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); //5

// ---------------

function sum() {
  // doesn't work
  // return arguments.reduce((total, currVal) => {
  //   return total + currVal
  // })

  // it's work but...
  // const argsArr = [...arguments];
  // return argsArr.reduce((total, currVal) => {
  //   return total + currVal
  // })
}

// ---------------
// new way

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15

// ---------------

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  })
}

function fullName(first, last, ...titles) {
  console.log(first, last, titles)  
}

const multiply = (...nums) => (
  nums.reduce((total, currVal) => total + currVal)
)

