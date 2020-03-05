function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}

multiply(7); //7
multiply(7, 3); //21

// ---------------

function multiply(a, b = 1) {
  return a * b;
}

// ---------------

const greet = (person, greeting = "Hi") => {
  console.log(`${greeting}, ${person}!`)
}