// --------
// forEach
// --------
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
]