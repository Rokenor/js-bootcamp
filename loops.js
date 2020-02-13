// Ex1 
for (let i = 5; i <= 10; i++) {
  console.log('Hello:' + i);
}

// Ex2 
for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num*num}`);
}

// Ex3
for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

// Ex4
const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++ ) {
  console.log(i, examScores[i]);
}

// Ex5
const word = 'stressed';
let reversedWord = '';
for (let i = word.length-1; i >= 0; i--) {
  reversedWord += word[i]
}


// Ex6
for (let i = 1; i <= 10; i++ ) {
  console.log('OUTER LOOP:', i);
  for (let j = 10; j >= 0; j-=2) {
    console.log('INNER LOOP:', j);
  }
}

// Ex7
const gameBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 2 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ]
];

let totalScore = 0;

for ( let i = 0; i < gameBoard.length; i++ ) {
  let row = gameBoard[i];
  for ( let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

// Ex8
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let j = 0;
while(j <= 5) {
  console.log(j);
  j++;
}

// Ex9
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS!');

// Ex10
for (let = i; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

// Ex11
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true) {
  if(target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS!');

// Ex12
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

for (let sub of subreddits) {
  console.log(sub);
}

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}

// Ex13
const magicSquare = [
  [ 2, 7, 6 ],
  [ 9, 5, 1 ],
  [ 4, 3, 8 ]
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`)
}

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`)
}

// Ex14
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]} ${words2[i]}`);
}

// Ex15
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

// doesn't work!!
// for (let x of movieReviews) {
//   console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let average = total / ratings.length;
console.log(average);

// Ex16
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
  console.log(prop, jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings Total Earningns: ${total}`);

// Ex17
for (let key in [88, 99, 77, 66]) {
  console.log(key)
};