// Ex1
if (1 === 1) {
  console.log('its true')
}

// Ex2

let rating = 3;
if (rating === 3) {
  console.log('you are suprestar')
}

// Ex3
let num = 37;
if (num % 2 !== 0) {
  console.log('ODD NUMBER!')
}

// Ex4
let rate = 3;

if (rate === 3) {
  console.log('YOU ARE A SUPERSTAR!')
} else if (rate === 2) {
  console.log('MEETS EXPECTATIONS')
} else if (rate === 1) {
  console.log('NEEDS IMPROVEMENT')
} else {
  console.log('INVALID RATE!')
}

// Ex5
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`)
}

// Ex6 
let password = "hellokitty";
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid password')
  } else {
    console.log('Password is long enough, but cannot contain spaces')
  }
} else {
  console.log("Passsword must be longer!")
}

// Ex7
let pwd = 'taco tuesday';
if (pwd.length >= 6 && pwd.indexOf(' ') === -1) {
  console.log('Valid password')
} else {
  console.log('Invalid password')
}

// Ex8
let age = 76;
if (age < 6 || age >= 65) {
  console.log('You get in for free');
} else {
  console.log('That will be $10 please')
}

// Ex9
let loggedInUser = null;
if(!loggedInUser) {
  console.log('GET OUT OF HERE!')
}

// Ex10
let day = 3;
switch(day) {
  case 1: 
    console.log('MONDAY'); 
    break;
  case 2: 
    console.log('TUESDAY'); 
    break;
  case 3: 
    console.log('WEDNESDAY'); 
    break;
  case 4: 
    console.log('THURSDAY'); 
    break;
  case 5: 
    console.log('FRIDAY'); 
    break;
  case 6: 
    console.log('SATURDAY'); 
    break;
  case 7: 
    console.log('SUNDAY'); 
    break;
  default: 
    console.log('INVALID DAY');
}

// Ex11
let number = 7;
number === 7 ? console.log('lucky!') : console.log('BAD!');