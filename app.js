// Ex1

let shoppingList = ['Cheddar cheese', '2% Milk'];

shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';

// Ex2

let topSongs = [
  'First Time Ever I Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars'
];

// topSongs[topSongs.length]
topSongs.push('Fortunate Son');
console.log(topSongs);

topSongs.pop() // remove last item

const nextSong = topSong.pop(); // it will be 'Fortunate Son'

// Ex3

let dishesToDo = ['big platter'];

dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');

// result is ['dirty spoon', 'mug', 'cereal bowl', 'small plate', 'large plate', 'big platter']

dishesToDo.shift()
// result 'dirty spoon'
dishesToDo
// result is ['mug', 'cereal bowl', 'small plate', 'large plate', 'big platter']

// Ex4

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);

// Ex5

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

ingredients.includes('fish');
// false
ingredients.includes('shrimp');
// true
ingredients.indexOf('eel');
// 6
ingredients.indexOf('maple syrup');
// -1


// Ex6

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

letters.reverse();
// 'R', 'E', 'S', 'P', 'E', 'C', 'T'
letters.join();
// 'R,E,S,P,E,C,T'
letters.join('');
// 'RESPECT'


// Ex7

let animal = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
// ['shark', 'salmon', 'whale']
let mammals = animals.slice(2, 4);
// ['whale', 'bear']
let reptiles = animals.slice(4, 6);
// ['lizard', 'tortiose']
let quadruped = animals.slice(-3);
// ['bear', 'lizard', 'tortoise']