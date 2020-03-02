/**
 * forEach
 */
const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function(n) {
  console.log(n * n);
  // 81, 64, 49, 36, 25, 16, 9, 4, 1 
});

nums.forEach(function(el) {
  if (el % 2 === 0) {
    console.log(el)
  }
  // 8, 6, 4, 2
})

// ----------

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },{
    title: 'A Gentelman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
];

books.forEach(function(book) {
  console.log(book.title.toUpperCase())
})


/**
 * Map
 */

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(nums) {
  return num * 2;
});

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});

const abbrevs = words.map(function(word) {
  return word.toUpperCase().split('').join('.')
});

/**
 * Find
 */

let movies = [
   "The Fantastic Mr. Fox",
   "Mr. and Mrs. Smith",
   "Mrs. Doubtfire",
   "Mr. Deeds"
];

let movie = movies.find(movie => {
   return movie.includes('Mrs');
})
// "Mr. and Mrs. Smith"

let movie2 = movies.find(m => m.indexOf('Mrs') === 0);
// "Mrs. Doubtfire"


const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },{
    title: 'A Gentelman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
];

const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => b.includes('Neil Gaiman'));

/**
 * Filter
 */

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter(n => {
  return n % 2 === 1;
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },{
    title: 'A Gentelman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },{
    title: 'The Way of King',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },{
    title: 'Lord of the files',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
];

const goodBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
));

const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))

const query = "";
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
});

/**
 * Every
 */

 const words = ['dog', 'dig', 'log', 'bag', 'wag'];

 words.every(word => {
   return word.length === 3;
 }) // true

 words.every(word => word[0] === 'd'); // false

 words.every(w => {
   let last_letter = w[w.length - 1];
   return last_letter === 'g';
 })

 /**
 * Some
 */

 const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

 words.some(word => {
   return word.length > 4;
 }); // true

 words.some(word => word[0] === 'Z'); // false

 words.some(w => w.includes('cake')); // true

 /**
 * Sort
 */

 const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

 const ascSort = prices.slice().sort((a,b) => a - b);
 const descSort = prices.slice().sort((a,b) => b - a);

 books.sort((a,b) => a.rating - b.rating);
