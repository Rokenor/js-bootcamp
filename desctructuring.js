const raceResults = [ 'Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp' ];

const [ gold, silver, bronze ] = raceResults;
gold; // 'Eliud Kipchoge'
silver; // 'Feyisa Lelisa'
bronze; // 'Galen Rupp'

const [ fastest, ...everyoneElse ] = raceResults;
fastest; // 'Eliud Kipchoge'
everyoneElse; // [ 'Feyisa Lelisa', 'Galen Rupp' ]

// ---------------

const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
}
const {first, last, country, title: honorific} = runner;

first; // "Eliud"
last; // "Kipchoge"
country; // "Kenya"
honorific; // 'Elder of the Order of the Golden Heart of Kenya'

const { first, last, ...other } = runner;

first; // "Eliud"
last; // "Kipchoge"
other; // {country: 'Kenya', title: 'Elder of the Order of the Golden Heart of Kenya'}

// ---------------

const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

const [{first: goldWinner}, { country }] = results; // goldWinner: Eliud; country: Ethiopia

// ---------------

const fullName = ({first, last}) => {
  return `${first} ${last}`
}
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
}
fullName(runner); // 'Eliud Kipchoge'

// ---------------

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}


