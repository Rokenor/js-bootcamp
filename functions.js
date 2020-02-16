// Ex1
function grumpus() {
  console.log('cl1');
  console.log('cl2');
  console.log('cl3');
};
// grumpus();

// Ex2
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function throwDice(numRolls) {
  for(let i = 0; i < numRolls; i++) {
    rollDie();
  }
}
// throwDice()

// Ex3
function greet(nickname) {
  console.log(`Hi, ${nickname}!`);
}

// Ex4
function square(num) {
  console.log(num * num);
}

function sum(x, y) {
  return x + y;
}

// Ex5
function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

// Ex6
function containsPurple(arr) {
  for (let color of arr) {
    if(color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}