function add(x, y) {
  return x + y;
}

const substract = function(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function(x, y) {
  return x / y;
}

const operations = [add, substract, multiply, divide];

for (let func of operations) {
  let result = func(20, 5);
  console.log(result);
}

const thing = {
  doSomething: multiply
}

// -----------------------

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log('AHAHAHAHHA');
}

callTwice(laugh);

// ------------------------

function rage() {
  console.log('I hate everything!');
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action()
  }
}

repeatNTimes(rage, 13);