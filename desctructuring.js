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
const {first, last, country} = runner;

first: // "Eliud"
last: // "Kipchoge"
country; // "Kenya"