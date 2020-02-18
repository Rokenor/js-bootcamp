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

// ------------------------

function makeBetbeewFunc(min, max) {
  return function (val) {
    return val => min && val <= max;
  }
}

const inAgeRange = makeBetbeewFunc(18, 100);

inAgeRange(17) // false
inAgeRange(68) // true

const isChild = makeBetbeewFunc(0, 18);

isChild(5); // true
isChild(67); // false

const isInNineties = makeBetbeewFunc(1990, 1999);

isInNineties(1989); // false
isInNineties(1995); // true

// ------------------------

function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
} 

const triple = multiplyBy(3);

triple(5); // 15

const double = multiplyBy(2);

double(8); // 16

// ------------------------

