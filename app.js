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